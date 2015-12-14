function postToGoogle () {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var address = $("#address").val();
  var addressLine2 = $("#addressLine2").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var zipCode = $("#zipCode").val();
  var mail = $("#mail").val();
  var phone = $("#phone").val();
  var twitter = $("#twitter").val();
  var student = $(".student:checked").val();
  var school = $("#school").val();
  var year = $("#year").val();
  var graduation = $("#graduation").val();
  var major = $("#major").val();
  var gpa = $("#gpa").val();
  var schedule = $("#schedule").val();
  var work = $("#work").val();
  var hours = $("#hours").val();
  var which = $(".which:checked").val();
  var experience = $("#experience").val();
  var skills = $("#skills").val();
  var goals = $("#goals").val();
  var why = $("#why").val();


$.ajax({
  url:
  "https://docs.google.com/forms/d/1kicoZZAqmjNWuioERNuHrgkfWa8Cf1N5UDmr8g76Zqg/formResponse",
  data: {
  "entry_1333527376": firstName,
  "entry_1020102480": lastName,
  "entry_832665467": address,
  "entry_980979161": addressLine2,
  "entry_130301047": city,
  "entry_1262685469": state,
  "entry_315583461": zipCode,
  "entry_725581510": mail,
  "entry_791146487": phone,
  "entry_1643756032": twitter,
  "entry_1454342325": student,
  "entry_1404827278": school,
  "entry_1681353526": year,
  "entry_1203806940": graduation,
  "entry_321825987": major,
  "entry_696811164": gpa,
  "entry_344848654": schedule,
  "entry_1890222036": work,
  "entry_1435396299": hours,
  "entry_434564928": which,
  "entry_1792261404": experience,
  "entry_1467600130": skills,
  "entry_1296179658": goals,
  "entry_1786128150": why



},
type: "POST",
dataType: "json",
statusCode: {
  0:function() {
    window.location.replace("thank-you.html");
  },
  200: function () {
    window.location.replace("thank-you.html");
  }
  }
});
}

$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault ();
    postToGoogle();
  })
})
