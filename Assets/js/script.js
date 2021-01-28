$(document).ready(function () {

  const timeCheck = false;

  // Set up variables for time from moment api
  const now = moment().format('MMMM Do YYYY');
  let currentHour = moment().format('H');
  let nowHour12 = moment().format('h');

  // set times for checking outside of work hours
  if (timeCheck) {
    currentHour = 13;
    nowHour12 = 1;
  }

  // set date on header
  let dateHeading = $('#date');
  dateHeading.text(now);


  // Check if there are saved events in localStorage
  // Parse JSON string to an object
  let savedEvent = JSON.parse(localStorage.getItem("savedEvent"));

  if (timeCheck) { console.log(savedEvent); }

  // If events saved events are returned from localStorage, update rows
  if (savedEvent !== null) {
    eventTextArray = savedEvent;
  } else {
    // pre configured event stored in array
    eventTextArray = new Array(9);
    eventTextArray[4] = "Walk the dogs and have lunch";
  }


  // set variable to reference event container
  let eventElements = $('#dayEventContainer');
  eventElements.empty();


  // build calendar by row based on 9hour workday (9-5)
  for (let hour = 9; hour <= 17; hour++) {
    // index for array offset from houtr
    let index = hour - 9;

    // create row elements
    let rowDiv = $('<div>');
    rowDiv.addClass('row');
    rowDiv.addClass('eventRow');
    rowDiv.attr('hour-index', hour);

    // create time container
    let timeContainer = $('<div>');
    timeContainer.addClass('col-md-2');

    // create time text elements
    const timeDisplay = $('<span>');
    // use this to get css class attributes
    timeDisplay.attr('class', 'timeDisplay');

    // display time hours in correct format
    let displayHour = 0;
    let ampm = "";
    if (hour > 12) {
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }

    // set time on text elements for each hour
    timeDisplay.text(`${displayHour} ${ampm}`);

    // insert into time container column, and into time text element
    rowDiv.append(timeContainer);
    timeContainer.append(timeDisplay);

    // build input elements for updating events
    let eventDetails = $('<input>');

    eventDetails.attr('id', `input-${index}`);
    eventDetails.attr('hour-index', index);
    eventDetails.attr('type', 'text');
    eventDetails.attr('class', 'eventDetail');

    // access index from array for hours
    eventDetails.val(eventTextArray[index]);

    // create columns and include bootstrap css class for responsiveness
    let eventDetailsColumn = $('<div>');
    eventDetailsColumn.addClass('col-md-9');

    // insert columns into row
    rowDiv.append(eventDetailsColumn);
    eventDetailsColumn.append(eventDetails);

    // Add save button to row
    let saveEventColumn = $('<div>');
    saveEventColumn.addClass('col-md-1');

    let saveBtn = $('<i>');
    saveBtn.attr('id', `saveid-${index}`);
    saveBtn.attr('save-id', index);
    saveBtn.attr('class', "fas fa-save saveIcon");

    // insert columnns into row
    rowDiv.append(saveEventColumn);
    saveEventColumn.append(saveBtn);
    // STOP building save portion of row

    // update row color based on time of day
    changeRowColor(rowDiv, hour);

    eventElements.append(rowDiv);
  };

  // Dynamically update colors function 
  function changeRowColor(timeRow, hour) {

    if (timeCheck) { console.log("rowColor ", currentHour, hour); }

    if (hour < currentHour) {
      if (timeCheck) { console.log("lessThan"); }
      timeRow.css("background-color", "#D9D9D9")
    } else if (hour > currentHour) {
      if (timeCheck) { console.log("greaterthan"); }
      timeRow.css("background-color", "#9BF0E1")
    } else {
      if (timeCheck) { console.log("equal"); }
      timeRow.css("background-color", "#F037A5")
    }
  };

  // Listener event saves data to local storage on click
  $(document).on('click', 'i', function (event) {
      // stops text from being automatically cleared from input
    event.preventDefault();

    let index = $(this).attr('save-id');

    let inputId = '#input-' + index;
    let value = $(inputId).val();

    eventTextArray[index] = value;

    // Function to remove animation class from button on click
    $(`#saveid-${index}`).removeClass('buttonPulse');
    localStorage.setItem("savedEvent", JSON.stringify(eventTextArray));
  });

  // function to change class on button based on change of input
  $(document).on('change', 'input', function (event) {
    event.preventDefault();

    let i = $(this).attr('hour-index');

    // add animation class to button
    $(`#saveid-${i}`).addClass('buttonPulse');
  });
});