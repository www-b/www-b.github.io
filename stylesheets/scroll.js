// JavaScript Document
(function ($) {
    $.fn.myScroll = function (options) {
        //榛樿閰嶇疆
        var defaults = {
            speed: 40,  //婊氬姩閫熷害,鍊艰秺澶ч€熷害瓒婃參
            rowHeight: 24 //姣忚鐨勯珮搴�
        };

        var opts = $.extend({}, defaults, options), intId = [], $this = $(this), thisH = $this.height(), ul = $this.find("ul"), ulH = ul.height();

        if (ulH <= thisH){
            return;
        }
        ul.css("margin-top", -( ulH - thisH) + "px");
        function marquee(obj, step) {
            obj.find("ul").animate({
                marginTop: '+=1'
            }, 0, function () {
                var s = parseInt($(this).css("margin-top"));
                if (s >= -(ulH - thisH) + step) {
                    $(this).find("li").last().prependTo($(this));
                    $(this).css("margin-top", -(ulH - thisH));
                }
            });
        }
        this.each(function (i) {
            var sh = opts["rowHeight"], speed = opts["speed"];
            intId[i] = setInterval(function () {
                marquee($this, sh);
            }, speed);
        });

    }

})(jQuery);
