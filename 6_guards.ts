function strip(x: string | number) {
  if (typeof x == "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

class MyResponce {
  header = "response header";
  result = "responce result";
}
class MyError {
  header = "response header";
  message = "responce message";
}

function handle(res: MyResponce | MyError) {
  if (res instanceof MyResponce) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

// =============

type AlertType = "succes" | "danger" | "warning";

function setAlertType(type: AlertType) {}
setAlertType("succes");
setAlertType("warning");
// setAlertType('default')
