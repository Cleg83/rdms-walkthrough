document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    let confirm_delete = document.querySelectorAll('.modal');
    M.Modal.init(confirm_delete);

    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmm yyyy",
      i18n: {done: "Select"},
    });

    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);

  });