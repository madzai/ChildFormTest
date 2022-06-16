function GenChildForm() {
  $("#childForm").css("display", "block");
}

function doTest() {
  // Parent values
  $("#cpHeaderInspType").text($("#pGenInspType").text());
  $("#cpGenInspComp").text($("#pGenInspComp").text());
  $("#cpGenContPers").text($("#pGenContPers").text());
  $("#cpGenInspType").text($("#pGenInspType").text());
  $("#cpGenMailAdds").text($("#pGenMailAdds").text());
  $("#cpSuppAgyCode").text($("#pSuppAgyCode").text());
  $("#cpSuppAgyName").text($("#pSuppAgyName").text());
  $("#cpProdBrand").text($("#pProdBrand").text());
  $("#cpProdBrandType").text($("#pProdBrandType").text());
  $("#cpProdBuyDept").text($("#pProdBuyDept").text());

  // Matching
  if ($("#cHeaderInspType").text() === $("#cpHeaderInspType").text()) {
    $("#ctHeaderInspType").text("Yes");
  } else {
    $("#ctHeaderInspType").text("No");
  }

  if ($("#cGenInspComp").text() === $("#cpGenInspComp").text()) {
    $("#ctGenInspComp").text("Yes");
  } else {
    $("#ctGenInspComp").text("No");
  }

  if ($("#cGenContPers").text() === $("#cpGenContPers").text()) {
    $("#ctGenContPers").text("Yes");
  } else {
    $("#ctGenContPers").text("No");
  }

  if ($("#cGenInspType").text() === $("#cpGenInspType").text()) {
    $("#ctGenInspType").text("Yes");
  } else {
    $("#ctGenInspType").text("No");
  }

  if ($("#cGenMailAdds").text() === $("#cpGenMailAdds").text()) {
    $("#ctGenMailAdds").text("Yes");
  } else {
    $("#ctGenMailAdds").text("No");
  }

  if ($("#cSuppAgyCode").text() === $("#cpSuppAgyCode").text()) {
    $("#ctSuppAgyCode").text("Yes");
  } else {
    $("#ctSuppAgyCode").text("No");
  }

  if ($("#cSuppAgyName").text() === $("#cpSuppAgyName").text()) {
    $("#ctSuppAgyName").text("Yes");
  } else {
    $("#ctSuppAgyName").text("No");
  }

  if ($("#cProdBrand").text() === $("#cpProdBrand").text()) {
    $("#ctProdBrand").text("Yes");
  } else {
    $("#ctProdBrand").text("No");
  }

  if ($("#cProdBrandType").text() === $("#cpProdBrandType").text()) {
    $("#ctProdBrandType").text("Yes");
  } else {
    $("#ctProdBrandType").text("No");
  }

  if ($("#cProdBuyDept").text() === $("#cpProdBuyDept").text()) {
    $("#ctProdBuyDept").text("Yes");
  } else {
    $("#ctProdBuyDept").text("No");
  }

}
