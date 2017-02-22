$(function () {
  // auto height textarea
  $('.weui-textarea').on('input keyup', function () {
    var $this = $(this);

    var minRows = parseInt($this.data('min-rows') || 1);
    var maxRows = parseInt($this.data('max-rows') || 10);

    // 尝试滚动一段距离，如果没有滚动条，scrollTop 还是 0
    if (this.scrollTop == 0) {
      this.scrollTop = 1;
    }

    while (this.scrollTop == 0) {
      if (this.rows > minRows) {
        this.rows--;
      } else {
        break;
      }

      this.scrollTop = 1;
      if (this.rows < maxRows) {
        this.style.overflowY = "hidden";
      }

      if (this.scrollTop > 0) {
        this.rows++;
        break;
      }
    }

    while (this.scrollTop > 0) {
      if (this.rows < maxRows) {
        this.rows++;
        if (this.scrollTop == 0) {
          this.scrollTop = 1;
        }
      } else {
        this.style.overflowY = "auto";
        break;
      }
    }
  });

  // init calendar
  $(".oli-weui-calendar input.weui-input").calendar();

  $(".oli-weui-calendar .weui-icon-cancel").on('click', function() {
    $(this).parent().parent().find('input.weui-input').val('');
  });

});