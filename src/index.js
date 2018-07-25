import "./style.css";

import { actions } from "./functions/actions";
import $ from "jquery";

window.$ = $;

$.each(actions, function() {
  const button = $(`<li><button>${this.title}</button></li>`);
  button.click(() => {
    let firstNum = $("#firstNum").val();
    let secondNum = $("#secondNum").val();
    let result = this.callback(+firstNum, +secondNum);
    $("#result").text(result);
  });
  $("#calculator .actions").append(button);
});

$("input[type=number]").focus(function() {
  $(this).select();
});
