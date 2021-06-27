(function($){
	$.fn.extend({ 
		linha: function(options)
		{
			var defaults = 	{
				strokeColor : '#999',
				strokeWidth : 2,
				opacity : 1,
				fill : 'none',
				animate : true,
				animationDirection : 'right',
				animationDuration : 0.75
			};
			
			
			// Color wheel stuff
			var color_wheel = [];
			var frequency = .3;
            for (var i = 0; i < 32; ++i)
            {
               red   = Math.sin(frequency*i + 0) * 127 + 128;
               green = Math.sin(frequency*i + (2*Math.PI/3)) * 127 + 128;
               blue  = Math.sin(frequency*i + (4*Math.PI/3)) * 127 + 128;
            
               color_wheel.push(RGB2Color(red,green,blue));
            }
            var color_index = 0;
            
              function RGB2Color(r,g,b)
	          {
	            return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
	          }
	          
	          
	    	  function byte2Hex(n)
	          {
	            var nybHexString = "0123456789ABCDEF";
	            return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
	          }
	          // Color wheel stuff  
            
            
			
			//override default options with user set options
			var settings = $.extend(defaults, options);
			
			var me = {};
			
			me.init = function(initObj){
				if (initObj) {
					$.each(initObj, function(index, value){
						settings[index] = value;
					});
				}
			};

			me.set = function(prop, val) {
				settings[prop] = val;
			};

			me.on = function(el1, el2) {
				var $el1 = $(el1);
				var $el2 = $(el2);
				if ($el1.length && $el2.length) {
					var svgheight, p, svgleft, svgtop, svgwidth;
	
					var el1pos = $(el1).offset();
					var el2pos = $(el2).offset();
	
					var el1H = $(el1).outerHeight();
					var el1W = $(el1).outerWidth();
	
					var el2H = $(el2).outerHeight();
					var el2W = $(el2).outerWidth();
	
					svgleft = Math.round(el1pos.left + el1W);
					svgwidth = Math.round(el2pos.left - svgleft);
	
					var curvinessFactor, cpt;
	
					////Determine which is higher/lower
					if ((el2pos.top + (el2H / 2)) <= (el1pos.top + (el1H / 2))) 
					{
						// console.log("low to high");
						svgheight = Math.round((el1pos.top + el1H / 2) - (el2pos.top + el2H / 2));
						svgtop = Math.round(el2pos.top + el2H / 2) - settings.strokeWidth;
						cpt = Math.round(svgwidth * Math.min(svgheight / 400, 1));
						p = "M0," + (svgheight + settings.strokeWidth) + " C" + cpt + "," + (svgheight + settings.strokeWidth) + " " + (svgwidth - cpt) + "," + settings.strokeWidth + " " + svgwidth + "," + settings.strokeWidth;
					} 
					else 
					{
						// console.log("high to low");
						svgheight = Math.round((el2pos.top + el2H / 2) - (el1pos.top + el1H / 2));
						svgtop = Math.round(el1pos.top + el1H / 2) - settings.strokeWidth;
						cpt = Math.round(svgwidth * Math.min(svgheight / 300, 1));
						p = "M0," + settings.strokeWidth + " C" + cpt + ",0 " + (svgwidth - cpt) + "," + (svgheight + settings.strokeWidth) + " " + svgwidth + "," + (svgheight + settings.strokeWidth);
					}
					$ropebag = $('#ropebag').length ? $('#ropebag') : $('body').append($("<div id='ropebag' />")).find('#ropebag');
	
					var svgnode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
					var newpath = document.createElementNS('http://www.w3.org/2000/svg', "path");
					
					var color_to_use = (settings.strokeColor != 'rainbow') ? settings.strokeColor : color_wheel[color_index];
					color_index = color_index + 1;
					if (color_index == 32)
					{
						color_index = 0;
					}
					newpath.setAttributeNS(null, "d", p);
					newpath.setAttributeNS(null, "stroke", color_to_use);
					newpath.setAttributeNS(null, "stroke-width", settings.strokeWidth);
					newpath.setAttributeNS(null, "opacity", settings.opacity);
					newpath.setAttributeNS(null, "fill", settings.fill);
					svgnode.appendChild(newpath);
					$(svgnode).css({
						left : svgleft,
						top : svgtop,
						position : 'absolute',
						width : svgwidth,
						height : svgheight + settings.strokeWidth * 2,
						minHeight : '20px'
					});
					$ropebag.append(svgnode);
					if (settings.animate) 
					{
						var pl = newpath.getTotalLength();
						
						// Set up the starting positions
						newpath.style.strokeDasharray = pl + ' ' + pl;
	
						if (settings.animationDirection == 'right') 
						{
							newpath.style.strokeDashoffset = pl;
						} 
						else 
						{
							newpath.style.strokeDashoffset = -pl;
						}
	
						// IE sucks, dont expect this to work. 
						newpath.getBoundingClientRect();
						newpath.style.transition = newpath.style.WebkitTransition = 'stroke-dashoffset ' + settings.animationDuration + 's ease-in-out';
						newpath.style.strokeDashoffset = '0';
					}
				}
			};

			me.off = function() {
				$("#ropebag").empty();
			};
			
			// Redraw upon resizing the window
			var selector = this.selector;
			$(window).resize(function(){
			     me.off();
			     $(selector).each(function(){
					var theID = this.id;
				    $("."+theID).each(function(i,e){
				      var rand = Math.random() * 0.7 + 0.3;
				      me.set('animationDuration', rand);
				      me.on($("#"+theID), e);
				    });
				});
			});
			
			// Loop through each parent and draw the lines connecting children
			return this.each(function(){
				var theID = this.id;
			    $("."+theID).each(function(i,e){
			      var rand = Math.random() * 0.7 + 0.3;
			      me.set('animationDuration', rand);
			      me.on($("#"+theID), e);
			    });
			});
		}
	});
})(jQuery);

