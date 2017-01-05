(function($){
	var modePos;
	$.fn.tip=function(options){
		//默认配置 方向
		var set=$.extend({
			"mode":'top'
		},options);
		if(!modePos){
			modePos={
			"top":function(t,tip){
				return {
					"left":t.offset().left+(t.width()-tip.width())/2+'px',
					"top":t.offset().top-tip.height()-_h+'px'
					}
				},
			"bottom":function(t,tip){
				return {
					"left":this.top(t,tip).left,
					"top":t.offset().top+t.height()+_h+'px'
					}
				}
			}
		}
		var _h=12;
		return this.each(function(){
			var _that=$(this);
			_that.hover(function(){
				var _l,_t;
				var _mode=set.mode;
				if(_that.attr('data-mode')){
					_mode=_that.attr('data-mode');
				}
				var _tipHtml='<div class="tip-container"><div class="'+_mode+'"><div class="tip-content">'+_that.attr("data-tip")+'</div></div></div>';
				_that.removeAttr('title alt');
				$('body').append(_tipHtml);
				console.log(modePos[_mode]);
				$('.tip-container').css(modePos[_mode](_that,$('.tip-container'))).fadeIn();
			},function(){
				$('.tip-container').remove();
			})
		});
	}
})(jQuery);