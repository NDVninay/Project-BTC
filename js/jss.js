$(function () {
  // RUN FUNCTION getCoinsDisplay ON PAGE LOAD
  getCoinsDisplay().catch((error) => {
    console.error("Error while fetching and displaying coins", error);
  });

  // ON INPUT && ON CLICK EVENTS THAT TRIGGER filterCoins FUNCTION FOR USER SEARCH
  $(".search").on("keydown", function (event) {
    if (event.keyCode === 13) {
      filterCoins();
    }
  });
  $(".btn").on("click", filterCoins);

  // ON CLICK EVENT FOR SHOWING MORE INFO ABOUT THE COINS
  $(".coins").on("click", ".moreInfo", function (event) {
    if ($(event.target).attr("aria-expanded") === "true") {
      getCoinDetailsFromClick(event);
    }
  });

  // LOADING SPINNER
  $(document).mousemove(function (event) {
    $("#spinner").css({
      left: event.pageX,
      top: event.pageY,
    });
  });
  $(document).ajaxStart(function () {
    $("#spinner").show();
  });
  $(document).ajaxStop(function () {
    $("#spinner").hide();
  });

  // PREVENT FORM FROM SUBMIT
  $(".form").submit(function (event) {
    event.preventDefault();
  });

  //SHOW ALL COINS ON NAVBAR COINS CLICK
  $("ul li a")
    .first()
    .on("click", function () {
      $(".card").show();
    });

  // ONCLICK EVENT FOR CHECKBOX
  $(".coins").on("click", 'input[type="checkbox"]', function (event) {
    checkBoxCheck(event);
  });

  // ONCLICK EVENT FOR COLLAPSE IN MODAL
  $("#changeCoin").on("click", function () {
    modalCollapse();
  });

  $(".approveChange").on("click", function () {
    changeCoin();
  });
  // ONCLICK EVENT FOT MODAL CLOSE BUTTON WHEN USER WANT TO CANCEL COIN CHANGE
  $("#closeModal").on("click", function () {
    modalCancel();
  });
});
