$.fn.shiftcheckbox = function(){
  var $chkboxes = $(this);
  lastChecked = typeof lastChecked == 'undefined'?false:lastChecked;
  $chkboxes.click(function(event) {
      if(!lastChecked) {
          lastChecked = this;
          return;
      }
      if(event.shiftKey) {
          var start = $chkboxes.index(this);
          var end = $chkboxes.index(lastChecked);
          $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).attr('checked', lastChecked.checked);
      }
      lastChecked = this;
  });
}