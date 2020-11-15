

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    var el = document.querySelector('.tabs');
    var instance = M.Tabs.init(el, {});

  });

  var el = document.getElementById('tabs')
var instance = M.Tabs.init(el, {swipeable: true})



  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instance = M.Datepicker.init(elems, {format: 'dd/mm/yyyy', autoClose:true, minDate: new Date()});
  });

  let toastHTML = '<span>Are you sure you wanna delete your account ? </span><a href="http://localhost:3000/api/user/deleteAccount/del">Yes</a><a href="/myAccount">No</a>';



  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems, { autoClose:true, twelveHour:false});
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

