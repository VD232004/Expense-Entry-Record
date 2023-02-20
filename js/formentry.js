//submit button disabled=True if inpputs and selection is empty and input and select is not empty then button disabled=False
const cat = document.querySelector('#categories')
const totalamount = document.querySelector('#amount')
const name = document.querySelector('#name')
const date = document.querySelector('#date')
const payment = document.querySelector('#payment')
const submit = document.querySelector('.btn-submit')

function checkForm() {
  if (
    cat.value !== '' &&
    totalamount.ariaReadOnly !== '' &&
    name.value !== '' &&
    date.value !== '' &&
    payment.value !== ''
  ) {
    submit.disabled = false
  } else {
    submit.disabled = true
  }
}
cat.addEventListener('input', checkForm)
totalamount.addEventListener('input', checkForm)
name.addEventListener('input', checkForm)
date.addEventListener('input', checkForm)
payment.addEventListener('input', checkForm)

// readonly for totoal amount values
function handleSelectChange() {
  var select = document.getElementById('sub-categoriesEdu')
  var input = document.getElementById('amount')
  if (
    select.value === 'Books' ||
    select.value === 'Notebooks' ||
    select.value === 'Dress'
  ) {
    input.setAttribute('readonly', true)
  } else {
    input.removeAttribute('readonly')
  }
}
function handleSelectChangeCate() {
  var select = document.getElementById('categories')
  var input = document.getElementById('amount')
  if (
    select.value === 'General' ||
    select.value === 'Kitchen-Care' ||
    select.value === 'Personal-Care' ||
    select.value === 'Education' ||
    select.value === 'Medical' ||
    select.value === 'Vehicle-Care'
  ) {
    input.setAttribute('readonly', true)
  } else {
    input.removeAttribute('readonly')
  }
}

//==================Calculation of qty and rate to amount====================
function calculate() {
  var myBox1 = document.getElementById('qty').value
  var myBox2 = document.getElementById('rate').value
  var result = document.getElementById('amount')
  var myResult = myBox1 * myBox2
  document.getElementById('amount').value = myResult
}

//Script for hide/ show div dropdown of Categories method
$(document).ready(function () {
  $('.cat')
    .change(function () {
      $(this)
        .find('option:selected')
        .each(function () {
          var optionValue = $(this).attr('value')
          if (optionValue) {
            $('.box2')
              .not('.' + optionValue)
              .hide()
            $('.box3')
              .not('.' + optionValue)
              .hide()
            $('.box4')
              .not('.' + optionValue)
              .hide()
            $('.' + optionValue).show()
          } else {
            $('.box2').hide()
            $('.box3').hide()
            $('.box4').hide()
          }
        })
    })
    .change()
})

//Script for hide/ show div dropdown of General Categories method
$(document).ready(function () {
  $('.subcat')
    .change(function () {
      $(this)
        .find('option:selected')
        .each(function () {
          var optionValue = $(this).attr('value')
          if (optionValue) {
            $('.box3')
              .not('.' + optionValue)
              .hide()
            $('.' + optionValue).show()
          } else {
            $('.box3').hide()
          }
        })
    })
    .change()
})

//Script for hide/ show div dropdown of Quantity, unit, price product Categories method
$(document).ready(function () {
  $('.subcat')
    .change(function () {
      $(this)
        .find('option:selected')
        .each(function () {
          var optionValue = $(this).attr('value')
          if (optionValue) {
            $('.box4')
              .not('.' + optionValue)
              .hide()
            $('.' + optionValue).show()
          } else {
            $('.box4').hide()
          }
        })
    })
    .change()
})

//Script for hide/show div dropdown for Payment method
$(document).ready(function () {
  $('.paymentmode')
    .change(function () {
      $(this)
        .find('option:selected')
        .each(function () {
          var optionValue = $(this).attr('value')
          if (optionValue) {
            $('.box')
              .not('.' + optionValue)
              .hide()
            $('.box1')
              .not('.' + optionValue)
              .hide()
            $('.' + optionValue).show()
          } else {
            $('.box').hide()
            $('.box1').hide()
          }
        })
    })
    .change()
})

//Script for hide/ show div dropdown of Online Payment method
$(document).ready(function () {
  $('.subpayment')
    .change(function () {
      $(this)
        .find('option:selected')
        .each(function () {
          var optionValue = $(this).attr('value')
          if (optionValue) {
            $('.box1')
              .not('.' + optionValue)
              .hide()
            $('.' + optionValue).show()
          } else {
            $('.box1').hide()
          }
        })
    })
    .change()
})

//dropdown rest when first is reset then second automatically reset for Category to sub-cat method
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#sub-categories').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#categories').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//cat to qty reset dropdown
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#qty').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#categories').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//cat to unit reset dropdown
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#unit').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#categories').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//cat to rate reset dropdown
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#rate').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#categories').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//cat to sub-catkit reset dropdown
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#sub-categoriesKit').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#categories').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//cat to sub-catEdu reset dropdown
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#sub-categoriesEdu').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#categories').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//sub-catEdu to Sub-catEduNote reset dropdown
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#sub-categoriesEduNote').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#sub-categoriesEdu').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//sub-catEdu to Sub-catEduDress reset dropdown
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#sub-categoriesEduDress').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#sub-categoriesEdu').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

//dropdown rest when first is reset then second automatically reset for payment method
$(function () {
  // Generic logic
  var toggleDropdown = function (payment) {
    // hasOwner is a boolean store
    var hasOwner = typeof payment !== typeof undefined && payment

    // Use boolean to decide whether to disable/enable co-owner field
    $('#sub-payment').prop('disabled', !hasOwner).val('')
  }

  // Trigger logic when #owner is updated
  $('#payment').on('change', function () {
    toggleDropdown($(this).val())
  })

  // Trigger logic on DOM ready
  toggleDropdown()
})

// Card number spacing
document.querySelector('#card').addEventListener('keydown', (e) => {
  e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, '$1 $2')
})
/* Jquery */
$('#card').keyup(function () {
  $(this).val(
    $(this)
      .val()
      .replace(/(\d{4})(\d+)/g, '$1 $2'),
  )
})

//Card Month expire
function formatString(e) {
  var inputChar = String.fromCharCode(event.keyCode)
  var code = event.keyCode
  var allowedKeys = [8]
  if (allowedKeys.indexOf(code) !== -1) {
    return
  }

  event.target.value = event.target.value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      '0$1/', // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      '$1/', // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      '0$1/$2', // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      '$1/$2', // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      '0', // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]*$/g,
      '', // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      '/', // Prevent entering more than 1 `/`
    )
}

//Script to send data to google sheets from online form
function SubForm() {
  $.ajax({
    url: 'https://api.apispreadsheets.com/data/XDc5lrg2oBfUtOG9/',
    type: 'post',
    data: $('#myForm').serializeArray(),
    success: function () {
      document.my_form.submit()
      document.my_form.reset()
      alert('Form Data Submitted 😊')
    },
    error: function () {
      alert('There was an error 😒')
    },
  })
}

// pop up

// Get the pop-up and button elements
var popUp = document.getElementById('myPopUp')
var button = document.getElementById('myButton')

// Get the close button element
var closeButton = document.getElementsByClassName('popUp-close')[0]

// When the user clicks the button, show the pop-up
button.onclick = function () {
  popUp.style.display = 'block'
}

// When the user clicks on the close button, hide the pop-up
closeButton.onclick = function () {
  popUp.style.display = 'none'
}

// When the user clicks anywhere outside of the pop-up, hide it
window.onclick = function (event) {
  if (event.target == popUp) {
    popUp.style.display = 'none'
  }
}

//Create multiple form

// function addForm() {
//     // Get the form container element
//     var container = document.getElementById("details");

//     // Get the form to copy
//     var formToCopy = document.querySelector('.fields');

//     // Clone the form and its contents
//     var clonedForm = formToCopy.cloneNode(true);

//     // Add a "delete" button to the cloned form
//     var deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "Delete";
//     deleteButton.className = "delete-button";
//     deleteButton.setAttribute("onclick", "deleteForm(this)");
//     clonedForm.appendChild(deleteButton);

//     // Add the cloned form to the container
//     container.appendChild(clonedForm);
//   }

//   function deleteForm(button) {
//     // Remove the parent element (the entire form)
//     button.parentNode.remove();
//   }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

//logoutbtn
document.getElementById('logout-button').addEventListener('click', function () {
  var result = confirm('Are you sure you want to logout?')
  if (result) {
    // Clear session or token
    localStorage.removeItem('token')

    // Redirect to login page
    window.location.href = 'https://vd232004.github.io/Expenses-Record-Web-App/'
  }
})
