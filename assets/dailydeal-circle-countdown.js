!function(o){function n(n){this.circularCountdown=o("#circular_countdown_days-"+n.id),this.countdownElementRadius=27,this.countdownXPosition=30,this.countdownYPosition=30,o("#circular_countdown_days-"+n.id).drawArc({layer:!0,name:"days_bg",strokeStyle:n.strokeDaysBackgroundColor,strokeWidth:n.strokeBackgroundWidth,radius:countdownElementRadius,shadowColor:n.backgroundShadowColor,shadowBlur:n.backgroundShadowBlur,x:this.countdownXPosition,y:this.countdownYPosition}).drawArc({layer:!0,name:"days",strokeStyle:n.strokeDaysColor,strokeWidth:n.strokeWidth,radius:countdownElementRadius,x:this.countdownXPosition,y:this.countdownYPosition}),o("#circular_countdown_hours-"+n.id).drawArc({layer:!0,name:"hours_bg",strokeStyle:n.strokeHoursBackgroundColor,strokeWidth:n.strokeBackgroundWidth,radius:countdownElementRadius,shadowColor:n.backgroundShadowColor,shadowBlur:n.backgroundShadowBlur,x:this.countdownXPosition,y:this.countdownYPosition}).drawArc({layer:!0,name:"hours",strokeStyle:n.strokeHoursColor,strokeWidth:n.strokeWidth,radius:countdownElementRadius,x:this.countdownXPosition,y:this.countdownYPosition}),o("#circular_countdown_minutes-"+n.id).drawArc({layer:!0,name:"minutes_bg",strokeStyle:n.strokeMinutesBackgroundColor,strokeWidth:n.strokeBackgroundWidth,radius:countdownElementRadius,shadowColor:n.backgroundShadowColor,shadowBlur:n.backgroundShadowBlur,x:this.countdownXPosition,y:this.countdownYPosition}).drawArc({layer:!0,name:"minutes",strokeStyle:n.strokeMinutesColor,strokeWidth:n.strokeWidth,radius:countdownElementRadius,x:this.countdownXPosition,y:this.countdownYPosition}),o("#circular_countdown_seconds-"+n.id).drawArc({layer:!0,name:"seconds_bg",strokeStyle:n.strokeSecondsBackgroundColor,strokeWidth:n.strokeBackgroundWidth,radius:countdownElementRadius,shadowColor:n.backgroundShadowColor,shadowBlur:n.backgroundShadowBlur,x:this.countdownXPosition,y:this.countdownYPosition}).drawArc({layer:!0,name:"seconds",strokeStyle:n.strokeSecondsColor,strokeWidth:n.strokeWidth,radius:countdownElementRadius,x:this.countdownXPosition,y:this.countdownYPosition}).drawLayers()}function t(n){o("#circular_countdown_days-"+n.id).animateLayer("days",{end:.9863*o("#countdown-"+n.id+"-timer ul li.days em").text()},n.countdownTickSpeed,n.countdownEasing),o("#circular_countdown_hours-"+n.id).animateLayer("hours",{end:15*o("#countdown-"+n.id+"-timer ul li.hours em").text()},n.countdownTickSpeed,n.countdownEasing),o("#circular_countdown_minutes-"+n.id).animateLayer("minutes",{end:6*o("#countdown-"+n.id+"-timer ul li.minutes em").text()},n.countdownTickSpeed,n.countdownEasing),o("#circular_countdown_seconds-"+n.id).animateLayer("seconds",{end:6*o("#countdown-"+n.id+"-timer ul li.seconds em").text()},n.countdownTickSpeed,n.countdownEasing)}function d(n){o("#countdown-"+n.id+"-timer").countdown({until:n.until,serverSync:function(){return new Date(n.currentDateTime)},format:"DHMS",layout:n.layout,onTick:function(){t(n)}}),o("#countdown-"+n.id+"-timer ul li.days em").text()>0?jQueryDD("#countdown-"+n.id).parent().addClass("countdown-days"):jQueryDD("head").append("<style>.daily-deal-countdown #countdown-"+n.id+" #circular_countdown_days-"+n.id+" { display:none; } .daily-deal-countdown #countdown-"+n.id+"-timer .days { display:none; }<style/>")}o.fn.circularCountdown=function(t){var s;return this.methods={init:function(t){return s=o.extend(1,s,t),this.each(function(){d(s),n(s);var t=o("#countdown-"+s.id).parent();if(t.hasClass("countdown-days"))220>(i=t.width())&&i>=192?t.addClass("countdown-large"):i>=170&&192>i?t.addClass("countdown-medium"):170>i&&i>=156?t.addClass("countdown-small"):156>i&&t.addClass("countdown-xsmall");else{var i=t.width();204>i&&i>=170?t.addClass("countdown-large"):170>i&&i>=156?t.addClass("countdown-medium"):156>i&&t.addClass("countdown-small")}parseInt(o(".daily-deal-countdown").css("width"))<=120?o(".title-big").css({"font-size":"21px"}):parseInt(o(".daily-deal-countdown").css("width"))<=156?o(".title-big").css({"font-size":"28px"}):parseInt(o(".daily-deal-countdown").css("width"))<=170?o(".title-big").css({"font-size":"30px"}):parseInt(o(".daily-deal-countdown").css("width"))<=192?o(".title-big").css({"font-size":"32px"}):parseInt(o(".daily-deal-countdown").css("width"))<=200?o(".title-big").css({"font-size":"34px"}):o(".title-big").css({"font-size":"37px"}),o(window).resize(function(){if(t.hasClass("countdown-days"))t.removeClass("countdown-large countdown-medium countdown-small countdown-xsmall"),220>(n=t.width())&&n>=192?t.addClass("countdown-large"):n>=170&&192>n?t.addClass("countdown-medium"):170>n&&n>=156?t.addClass("countdown-small"):156>n&&t.addClass("countdown-xsmall");else{t.removeClass("countdown-large countdown-medium countdown-small countdown-xsmall");var n=t.width();204>n&&n>=170?t.addClass("countdown-large"):170>n&&n>=156?t.addClass("countdown-medium"):156>n&&t.addClass("countdown-small")}parseInt(o(".daily-deal-countdown").css("width"))<=120?o(".title-big").css({"font-size":"21px"}):parseInt(o(".daily-deal-countdown").css("width"))<=156?o(".title-big").css({"font-size":"28px"}):parseInt(o(".daily-deal-countdown").css("width"))<=170?o(".title-big").css({"font-size":"30px"}):parseInt(o(".daily-deal-countdown").css("width"))<=192?o(".title-big").css({"font-size":"32px"}):parseInt(o(".daily-deal-countdown").css("width"))<=200?o(".title-big").css({"font-size":"34px"}):o(".title-big").css({"font-size":"37px"})})})},update:function(n){s=o.extend(1,s,n)}},this.methods[t]?this.methods[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void o.error("No found method "+t):this.methods.init.apply(this,arguments)}}(jQueryDD);