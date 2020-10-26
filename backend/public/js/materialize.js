

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    var el = document.querySelector('.tabs');
    var instance = M.Tabs.init(el, {});
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instance = M.Datepicker.init(elems, {format: 'dd/mm/yyyy', autoClose:true, maxDate: new Date()});
  });

