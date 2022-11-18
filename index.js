$(document).ready(function () {
  $("button").click(function () {
    const name = $("#text").val();
    alert(name);
    console.log(name);
    $(".changingImg").attr('src', `https://joeschmoe.io/api/v1/male/${name}`);
    const b = $(".changingImg");
    console.log(b);
  });
});
//api
//https://joeschmoe.io/api/v1/`
//https://joeschmoe.io/api/v1/random