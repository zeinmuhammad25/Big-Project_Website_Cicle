$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/01-Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "This feature will check the overall appearance of the scenario of home page",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 12158736900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Login",
  "description": "",
  "id": "login;user-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 2626197800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 430139700,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5443211800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 140714000,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5124446600,
  "status": "passed"
});
formatter.after({
  "duration": 919771600,
  "status": "passed"
});
formatter.uri("features/03-Board.feature");
formatter.feature({
  "line": 2,
  "name": "Board",
  "description": "This feature will check the overall appearance of the scenario of Feature Board",
  "id": "board",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 12742162600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User add normal list",
  "description": "",
  "id": "board;user-add-normal-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click logo add list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User input \"First List\" as list name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click button create",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User will see new list has been inputed",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 3592582400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 414309400,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5449133700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 138471800,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5110213300,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3936759800,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3145146600,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickButtonAddList()"
});
formatter.result({
  "duration": 59296000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-outline-dark btn-block btn-sm\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [145b8d7c646bb0d3ce16279975d170da, findElement {using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-outline-dark btn-block btn-sm\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:65465}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65465/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 145b8d7c646bb0d3ce16279975d170da\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickButtonAddList(board.java:165)\r\n\tat step_definitions.featureBoard.clickButtonAddList(featureBoard.java:40)\r\n\tat ✽.And User click logo add list(features/03-Board.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "First List",
      "offset": 12
    }
  ],
  "location": "featureBoard.inputListName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonCreate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.verifyNewList()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 832448900,
  "status": "passed"
});
formatter.before({
  "duration": 8257994800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User add normal card",
  "description": "",
  "id": "board;user-add-normal-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click logo add card",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User input \"First Card\" as card name",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User click add new cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User will see new card been inputed",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 4835437400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 241079000,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5278408000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 146215600,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5115588400,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3602424400,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3135963600,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickButtonAddCard()"
});
formatter.result({
  "duration": 49117700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]/div[1]//div[@class\u003d\u0027ListContainer_ListContainer__buttonBottom__2kZAI\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c4020b8456f94678e38962ef0c14a231, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]/div[1]//div[@class\u003d\u0027ListContainer_ListContainer__buttonBottom__2kZAI\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49165}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49165/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c4020b8456f94678e38962ef0c14a231\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickButtonAddCard(board.java:197)\r\n\tat step_definitions.featureBoard.clickButtonAddCard(featureBoard.java:67)\r\n\tat ✽.And User click logo add card(features/03-Board.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Card",
      "offset": 12
    }
  ],
  "location": "featureBoard.inputCardName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonSaveAddCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.verifyNewCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1137803300,
  "status": "passed"
});
formatter.before({
  "duration": 8287363500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User check at icon MuiSvgIcon to verify button",
  "description": "",
  "id": "board;user-check-at-icon-muisvgicon-to-verify-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click icon MuiSvgIcon",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User will see display row explore",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 4091380200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 268185200,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5197061500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 426104700,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5331576700,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 4349051500,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3133539400,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickButtonMuiSvgIcon()"
});
formatter.result({
  "duration": 34991600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/teams/624ffa5430d9d12372ea20dd\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d68c5da7b4de47d7c61b034e48c7bbc7, findElement {using\u003dxpath, value\u003d//a[@href\u003d\u0027/teams/624ffa5430d9d12372ea20dd\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49266}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49266/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d68c5da7b4de47d7c61b034e48c7bbc7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickButtonMuiSvgIcon(board.java:222)\r\n\tat step_definitions.featureBoard.clickButtonMuiSvgIcon(featureBoard.java:95)\r\n\tat ✽.And User click icon MuiSvgIcon(features/03-Board.feature:39)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.verifyCardBoard()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1130237600,
  "status": "passed"
});
formatter.before({
  "duration": 7624335600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User check at icon home to verify button",
  "description": "",
  "id": "board;user-check-at-icon-home-to-verify-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User click icon home",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User will see display home",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 4276566600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 232261200,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5178339200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 134989000,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5133453600,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 5189805900,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3145144300,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickButtonHome()"
});
formatter.result({
  "duration": 32984100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[.\u003d\u0027Home\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e4050923cb6c5f1d8dc4331842a21de4, findElement {using\u003dxpath, value\u003d//a[.\u003d\u0027Home\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49365}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49365/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e4050923cb6c5f1d8dc4331842a21de4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickButtonHome(board.java:226)\r\n\tat step_definitions.featureBoard.clickButtonHome(featureBoard.java:108)\r\n\tat ✽.And User click icon home(features/03-Board.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.verifyCardInTeams()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1005743600,
  "status": "passed"
});
formatter.before({
  "duration": 7820474200,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "User add normal input notes and attachments",
  "description": "",
  "id": "board;user-add-normal-input-notes-and-attachments",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click icon notes",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User input \"perubahan awal\" as notes",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User click button save",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User attach file \"C:\\\\Users\\\\TELKOM\\\\Pictures\\\\Capture1.PNG\" as file attachment",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "User will see update data from notes",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User will see update data from file attachments",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 3329067400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 433124400,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5272496400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 135338100,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5115036100,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3981523100,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3131020800,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 32769200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8f5cc00bbf8b6d700a281a3774a5ff7b, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49450}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49450/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8f5cc00bbf8b6d700a281a3774a5ff7b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:61)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.clickButtonIconNotes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "perubahan awal",
      "offset": 12
    }
  ],
  "location": "featureBoard.setInputNotes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonSaveNotes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\\\Users\\\\TELKOM\\\\Pictures\\\\Capture1.PNG",
      "offset": 18
    }
  ],
  "location": "featureBoard.attachFile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.verifyNotes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.verifyAttachment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 830957000,
  "status": "passed"
});
formatter.before({
  "duration": 6963065700,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "User delete notes and attachment at card feature attach",
  "description": "",
  "id": "board;user-delete-notes-and-attachment-at-card-feature-attach",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click icon notes",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User input \" \" as notes",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "User click button save",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User delete attachment",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Verify delete",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 26832628100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 199014500,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5121223100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 146700400,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5156766600,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3163175900,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3166624300,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 42682800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1337d1ba293587c912f6d84761875f8e, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49540}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49540/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1337d1ba293587c912f6d84761875f8e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.clickButtonIconNotes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 12
    }
  ],
  "location": "featureBoard.setInputNotes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonSaveNotes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonDeleteAttachment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonVerifyDelete()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 890711200,
  "status": "passed"
});
formatter.before({
  "duration": 24976907200,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "User add member at modify card",
  "description": "",
  "id": "board;user-add-member-at-modify-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User click button members",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User will choose member to collaborate",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User can also add and remove in the add member icon",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User will choose deleted member from collaborate",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 6284431800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 202214100,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5138634300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 145935900,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5118107200,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3911944000,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3140585700,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 20839800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f40ee20c840b8795a8dd905ebedc8670, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49619}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49619/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f40ee20c840b8795a8dd905ebedc8670\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:92)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.clickButtonMembers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonAddNewMembers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonIconMembers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonRemoveMembers()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 833985800,
  "status": "passed"
});
formatter.before({
  "duration": 6256967600,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "User add normal due date",
  "description": "",
  "id": "board;user-add-normal-due-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click button due date",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User setup the date \"12122022\" as date",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "User click button save",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User will see display due date",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 3163022600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 309476300,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5317965000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 127110600,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5110929700,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 5453462600,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3214956000,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 47277600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [76ac4d4fe28a485aea9c62785196d1d6, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53524}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53524/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 76ac4d4fe28a485aea9c62785196d1d6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:106)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.clickButtonDueDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12122022",
      "offset": 21
    }
  ],
  "location": "featureBoard.setInputDateDueDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonSaveNotes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.verifyDueDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 855711100,
  "status": "passed"
});
formatter.before({
  "duration": 7735001900,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "User add remove due date at card have been finish",
  "description": "",
  "id": "board;user-add-remove-due-date-at-card-have-been-finish",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 113,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User click card feature attach added due date",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User clicks the due date timer",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "User click remove due date",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 9860776000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 191830500,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5107242200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 159226300,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5111732600,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 5679283300,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3150971100,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardWithDueDate()"
});
formatter.result({
  "duration": 21138700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027OverlayButton_container__3kxDV\u0027]//div[@class\u003d\u0027OverlayButton_container__3kxDV\u0027]/div[contains(.,\u0027fitur attachApr 101\u0027)]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6444a97ac5c76b00c64001f06f351d0a, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027OverlayButton_container__3kxDV\u0027]//div[@class\u003d\u0027OverlayButton_container__3kxDV\u0027]/div[contains(.,\u0027fitur attachApr 101\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53623}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53623/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6444a97ac5c76b00c64001f06f351d0a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardWithDueDate(board.java:250)\r\n\tat step_definitions.featureBoard.clickCardWithDueDate(featureBoard.java:237)\r\n\tat ✽.And User click card feature attach added due date(features/03-Board.feature:120)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.clickVerifyDueDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickButtonRemove()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 814076900,
  "status": "passed"
});
formatter.before({
  "duration": 7294434800,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "User will move the card by using the move feature icon by list",
  "description": "",
  "id": "board;user-will-move-the-card-by-using-the-move-feature-icon-by-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 125,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "User click icon move",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "User click list",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "User set position \"Threed List\" list which is aimed",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 10768317900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 206502100,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5110954400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 81706900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d100.0.4896.88)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1f500c715f994a74f876ea07e5570f48, sendKeysToElement {id\u003de933a502-7ef5-4279-8161-4dbd84ec12d9, value\u003d[Ljava.lang.CharSequence;@51f95f0d}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53712}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53712/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (1f500c715f994a74f876ea07e5570f48)] -\u003e xpath: //input[@type\u003d\u0027password\u0027]]\nSession ID: 1f500c715f994a74f876ea07e5570f48\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:107)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat pageObject.login.setInputPassword(login.java:37)\r\n\tat step_definitions.featureLogin.inputPassword(featureLogin.java:38)\r\n\tat ✽.When User input \"T25121998\" as password(features/03-Board.feature:128)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 750839400,
  "status": "passed"
});
formatter.before({
  "duration": 9876757500,
  "status": "passed"
});
formatter.scenario({
  "line": 137,
  "name": "User will move the card by using the move feature icon by list  for two times",
  "description": "",
  "id": "board;user-will-move-the-card-by-using-the-move-feature-icon-by-list--for-two-times",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 138,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User click icon move",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User set position which is aimed",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User click button move",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 2942471200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 241991200,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5154368400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 159106300,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5112754300,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3158000800,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3134126200,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 46693600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [977d479d80146eceee21589e43a239a6, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53779/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 977d479d80146eceee21589e43a239a6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:145)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 898999400,
  "status": "passed"
});
formatter.before({
  "duration": 14532291100,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "User will move the card by using the move feature icon by position",
  "description": "",
  "id": "board;user-will-move-the-card-by-using-the-move-feature-icon-by-position",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 151,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User click icon move",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User set position which is aimed",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "User click button move",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 2898906700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 328917600,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5209592000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 141550100,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5108604700,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3858529600,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3136154900,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 31291200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9faa69771bc9a0f3b2df6b26cd9ae9a1, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53880}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53880/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9faa69771bc9a0f3b2df6b26cd9ae9a1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:158)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 832939900,
  "status": "passed"
});
formatter.before({
  "duration": 8231046900,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "User add add card to private card",
  "description": "",
  "id": "board;user-add-add-card-to-private-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 164,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 165,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "User click button private card",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "User will see the card will be private",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 7311207800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 191571800,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5137596900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 168608800,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5149324800,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3147564500,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3135092900,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 38420100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bb3607ac747230f48b9ecdadebeafe4e, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53973}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53973/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bb3607ac747230f48b9ecdadebeafe4e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:171)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.clickButtonPrivateCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "featureBoard.verifyPrivateCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 832401900,
  "status": "passed"
});
formatter.before({
  "duration": 7837770600,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "User add card to public card",
  "description": "",
  "id": "board;user-add-card-to-public-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 176,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 177,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "User click card board",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User click card feature attach from second list",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "User click button public card",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 2891039200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 204617300,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5144313800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 152700500,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5144310700,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3879941100,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardBoard()"
});
formatter.result({
  "duration": 3145648800,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardFeatureAttach()"
});
formatter.result({
  "duration": 47626100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [47dc44cf555df7c007e929a37392f032, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027ListContainer_ListContainer__outerList__1PG0-\u0027]//div[@class\u003d\u0027infinite-scroll-component \u0027]/div[@id\u003d\u0027listcard_content-0\u0027]/div[3]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54074}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54074/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 47dc44cf555df7c007e929a37392f032\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.board.clickCardFeatureAttach(board.java:254)\r\n\tat step_definitions.featureBoard.clickCardFeatureAttach(featureBoard.java:123)\r\n\tat ✽.And User click card feature attach from second list(features/03-Board.feature:183)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureBoard.clickButtonPublicCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 849356500,
  "status": "passed"
});
formatter.uri("features/04-GroupChat.feature");
formatter.feature({
  "line": 2,
  "name": "Group Chat",
  "description": "This feature will check the overall appearance of the scenario of Feature Group Chat",
  "id": "group-chat",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 7876656800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User add normal massage",
  "description": "",
  "id": "group-chat;user-add-normal-massage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click rowbox group chat",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User input \"good morning\" as massage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click icon send",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User will see massage already send",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 1564343800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 261721600,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5130270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 123201000,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5117127200,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3260040200,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.inputPassword()"
});
formatter.result({
  "duration": 3188588100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good morning",
      "offset": 12
    }
  ],
  "location": "featureGroupChat.setInputMassage(String)"
});
formatter.result({
  "duration": 2203987900,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.clickButtonSend()"
});
formatter.result({
  "duration": 5127944900,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.verifyMassage()"
});
formatter.result({
  "duration": 82387400,
  "status": "passed"
});
formatter.after({
  "duration": 834062000,
  "status": "passed"
});
formatter.before({
  "duration": 7723560900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User delete massage",
  "description": "",
  "id": "group-chat;user-delete-massage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click rowbox group chat",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click massage",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click icon option in massage",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click button delete massage",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 2921359000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 265863100,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5193979500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 134425400,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5115565000,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3845468900,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.inputPassword()"
});
formatter.result({
  "duration": 3177784400,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.clickMassage()"
});
formatter.result({
  "duration": 5138207200,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.clickIconOptionMassage()"
});
formatter.result({
  "duration": 132002300,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.clickButtonDelete()"
});
formatter.result({
  "duration": 75265000,
  "status": "passed"
});
formatter.after({
  "duration": 868056900,
  "status": "passed"
});
formatter.before({
  "duration": 7448245200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User add massage at two times",
  "description": "",
  "id": "group-chat;user-add-massage-at-two-times",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click rowbox group chat",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User input \"api solved\" as massage",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User click icon send",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User input \"night at 10 pm\" as massage",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User click icon send",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 4078984900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 192328000,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5130469600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 140932400,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5107140400,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3164651400,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.inputPassword()"
});
formatter.result({
  "duration": 3168413200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "api solved",
      "offset": 12
    }
  ],
  "location": "featureGroupChat.setInputMassage(String)"
});
formatter.result({
  "duration": 2183548700,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.clickButtonSend()"
});
formatter.result({
  "duration": 5120742300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "night at 10 pm",
      "offset": 12
    }
  ],
  "location": "featureGroupChat.setInputMassage(String)"
});
formatter.result({
  "duration": 2202327700,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.clickButtonSend()"
});
formatter.result({
  "duration": 5067413500,
  "status": "passed"
});
formatter.after({
  "duration": 854308300,
  "status": "passed"
});
formatter.before({
  "duration": 7674892300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User add file at massage",
  "description": "",
  "id": "group-chat;user-add-file-at-massage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User click rowbox group chat",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User input \"C:\\\\Users\\\\TELKOM\\\\Pictures\\\\Capture1.PNG\" as file",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User will see file already send",
  "keyword": "Then "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 5431098700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 260783300,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5160567300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 116301600,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5116185700,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 3152779700,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.inputPassword()"
});
formatter.result({
  "duration": 3179375800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\\\Users\\\\TELKOM\\\\Pictures\\\\Capture1.PNG",
      "offset": 12
    }
  ],
  "location": "featureGroupChat.setAttachFileMassage(String)"
});
formatter.result({
  "duration": 5107906400,
  "status": "passed"
});
formatter.match({
  "location": "featureGroupChat.setAttachFileMassage()"
});
formatter.result({
  "duration": 62881700,
  "status": "passed"
});
formatter.after({
  "duration": 846992900,
  "status": "passed"
});
formatter.uri("features/05-DocsAndFiles.feature");
formatter.feature({
  "line": 2,
  "name": "Docs \u0026 Files",
  "description": "This feature will check the overall appearance of the scenario of Feature Docs \u0026 Files",
  "id": "docs-\u0026-files",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 7832309000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User add a document at docs \u0026 files",
  "description": "",
  "id": "docs-\u0026-files;user-add-a-document-at-docs-\u0026-files",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User login with google",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"zeinazhar12@gmail.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User input \"T25121998\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click button selanjutnya",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click ticket card at teams",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click rowbox Docs \u0026 Files",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click button add docs \u0026 files",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click button add a new doc",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input \"This is the massage who will be input to all off the costumer\" as description",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User click button publish",
  "keyword": "And "
});
formatter.match({
  "location": "featureLogin.ClickSignInWithGoogle()"
});
formatter.result({
  "duration": 6152810300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zeinazhar12@gmail.com",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputEmail(String)"
});
formatter.result({
  "duration": 204472300,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5151490200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T25121998",
      "offset": 12
    }
  ],
  "location": "featureLogin.inputPassword(String)"
});
formatter.result({
  "duration": 131657000,
  "status": "passed"
});
formatter.match({
  "location": "featureLogin.inputPassword()"
});
formatter.result({
  "duration": 5120365100,
  "status": "passed"
});
formatter.match({
  "location": "featureBoard.clickCardInTeams()"
});
formatter.result({
  "duration": 5109103400,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.clickRowBox()"
});
formatter.result({
  "duration": 2122517700,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.clickButtonAddDocsAndFiles()"
});
formatter.result({
  "duration": 105215600,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.clickButtonAddNewDoc()"
});
formatter.result({
  "duration": 335401200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is the massage who will be input to all off the costumer",
      "offset": 12
    }
  ],
  "location": "featureDocsAndFiles.setInputDescription(String)"
});
formatter.result({
  "duration": 545362600,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.clickButtonPublish()"
});
formatter.result({
  "duration": 115164800,
  "status": "passed"
});
formatter.after({
  "duration": 877580900,
  "status": "passed"
});
formatter.before({
  "duration": 7142230400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User archive document at docs \u0026 files page",
  "description": "",
  "id": "docs-\u0026-files;user-archive-document-at-docs-\u0026-files-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User wants to go to the docs and files page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Which is where the user will archive a document",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User will see a document has been archived",
  "keyword": "Then "
});
formatter.match({
  "location": "featureDocsAndFiles.homePage()"
});
formatter.result({
  "duration": 26210820100,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.userAtDocsAndFilePage()"
});
formatter.result({
  "duration": 5336520600,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.archiveDoc()"
});
formatter.result({
  "duration": 4331713400,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.verifyDoc()"
});
formatter.result({
  "duration": 19428500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[.\u003d\u0027This Document is archived\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2a31dd99d7bcffa16dad9c36b0bb34d1, findElement {using\u003dxpath, value\u003d//h1[.\u003d\u0027This Document is archived\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63002}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63002/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2a31dd99d7bcffa16dad9c36b0bb34d1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat pageObject.docsAndFiles.verifyDoc(docsAndFiles.java:90)\r\n\tat step_definitions.featureDocsAndFiles.verifyDoc(featureDocsAndFiles.java:155)\r\n\tat ✽.Then User will see a document has been archived(features/05-DocsAndFiles.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 867202700,
  "status": "passed"
});
formatter.before({
  "duration": 7738602800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User add new folder at docs \u0026 files",
  "description": "",
  "id": "docs-\u0026-files;user-add-new-folder-at-docs-\u0026-files",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User wants to go to the docs and files page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Which is where the user will add a new folder on the docs and files page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the folder name is \"the new folder\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User will see folder by the name The New Folder",
  "keyword": "Then "
});
formatter.match({
  "location": "featureDocsAndFiles.homePage()"
});
formatter.result({
  "duration": 15299782300,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.userAtDocsAndFilePage()"
});
formatter.result({
  "duration": 5296224200,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.userAddFolder()"
});
formatter.result({
  "duration": 210079400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the new folder",
      "offset": 20
    }
  ],
  "location": "featureDocsAndFiles.setNameFolder(String)"
});
formatter.result({
  "duration": 3232767400,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.verifyNewFolder()"
});
formatter.result({
  "duration": 60090000,
  "status": "passed"
});
formatter.after({
  "duration": 851571900,
  "status": "passed"
});
formatter.before({
  "duration": 7752342800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User archive folder at docs \u0026 files page",
  "description": "",
  "id": "docs-\u0026-files;user-archive-folder-at-docs-\u0026-files-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User wants to go to the docs and files page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Which is where the user will archive the folder as name the new folder",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User will see folder by the name The New Folder",
  "keyword": "Then "
});
formatter.match({
  "location": "featureDocsAndFiles.homePage()"
});
formatter.result({
  "duration": 16456882000,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.userAtDocsAndFilePage()"
});
formatter.result({
  "duration": 6081141300,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.archiveFolder()"
});
formatter.result({
  "duration": 5442683400,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.verifyNewFolder()"
});
formatter.result({
  "duration": 49344400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(.,\u0027the new folder\u0027)]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b5cef3148b76e8234bfd5dd0f3673841, findElement {using\u003dxpath, value\u003d//h1[contains(.,\u0027the new folder\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63181}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63181/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b5cef3148b76e8234bfd5dd0f3673841\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat pageObject.docsAndFiles.verifyNewFolder(docsAndFiles.java:140)\r\n\tat step_definitions.featureDocsAndFiles.verifyNewFolder(featureDocsAndFiles.java:78)\r\n\tat ✽.Then User will see folder by the name The New Folder(features/05-DocsAndFiles.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 849285100,
  "status": "passed"
});
formatter.before({
  "duration": 7895745400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User upload files at docs \u0026 files",
  "description": "",
  "id": "docs-\u0026-files;user-upload-files-at-docs-\u0026-files",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "User at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User wants to go to the docs and files page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Which is where the user will add a new files to docs and files",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The files location at \"C:\\\\Users\\\\TELKOM\\\\Pictures\\\\Capture1.PNG\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "The new file by name Capture.PNG available at docs and files",
  "keyword": "Then "
});
formatter.match({
  "location": "featureDocsAndFiles.homePage()"
});
formatter.result({
  "duration": 27551637800,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.userAtDocsAndFilePage()"
});
formatter.result({
  "duration": 6076541500,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.newAdd()"
});
formatter.result({
  "duration": 91179600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\\\Users\\\\TELKOM\\\\Pictures\\\\Capture1.PNG",
      "offset": 23
    }
  ],
  "location": "featureDocsAndFiles.uploadFiles(String)"
});
formatter.result({
  "duration": 3092940800,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.verifyFile()"
});
formatter.result({
  "duration": 71746700,
  "status": "passed"
});
formatter.after({
  "duration": 848212400,
  "status": "passed"
});
formatter.before({
  "duration": 7486879200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "User archive files at docs \u0026 files page",
  "description": "",
  "id": "docs-\u0026-files;user-archive-files-at-docs-\u0026-files-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "User at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User wants to go to the docs and files page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Which is where the user will archive the file Capture1.PNG",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The new file by name Capture.PNG available at docs and files",
  "keyword": "Then "
});
formatter.match({
  "location": "featureDocsAndFiles.homePage()"
});
formatter.result({
  "duration": 15810852300,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.userAtDocsAndFilePage()"
});
formatter.result({
  "duration": 5273999800,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.archiveFile()"
});
formatter.result({
  "duration": 6437407400,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.verifyFile()"
});
formatter.result({
  "duration": 28440700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[.\u003d\u0027Capture1.PNG\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [18fce875b7b9bbccc190730d966e5bbc, findElement {using\u003dxpath, value\u003d//h1[.\u003d\u0027Capture1.PNG\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63365}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63365/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 18fce875b7b9bbccc190730d966e5bbc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat pageObject.docsAndFiles.verifyFile(docsAndFiles.java:131)\r\n\tat step_definitions.featureDocsAndFiles.verifyFile(featureDocsAndFiles.java:128)\r\n\tat ✽.Then The new file by name Capture.PNG available at docs and files(features/05-DocsAndFiles.feature:48)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 772532900,
  "status": "passed"
});
formatter.before({
  "duration": 7984315900,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "User verify button icon docs \u0026 files",
  "description": "",
  "id": "docs-\u0026-files;user-verify-button-icon-docs-\u0026-files",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "User at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User wants to go to the docs and files page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User enters one of the docs \u0026 files",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User will return to the start page of docs",
  "keyword": "Then "
});
formatter.match({
  "location": "featureDocsAndFiles.homePage()"
});
formatter.result({
  "duration": 16486644400,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.userAtDocsAndFilePage()"
});
formatter.result({
  "duration": 5302758400,
  "status": "passed"
});
formatter.match({
  "location": "featureDocsAndFiles.verifyButtonIocnDocsAndFiles()"
});
formatter.result({
  "duration": 49603200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[.\u003d\u0027Ini untuk selenium\u0027]\"}\n  (Session info: chrome\u003d100.0.4896.88)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-93HN0V0\u0027, ip: \u0027192.168.100.232\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a78b819b153d1b011b4b1d723d84f988, findElement {using\u003dxpath, value\u003d//p[.\u003d\u0027Ini untuk selenium\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.88, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\TELKOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64316}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64316/devtoo..., se:cdpVersion: 100.0.4896.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a78b819b153d1b011b4b1d723d84f988\r\n\tat sun.reflect.GeneratedConstructorAccessor37.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat pageObject.docsAndFiles.clickButtonOnceOfFile(docsAndFiles.java:85)\r\n\tat step_definitions.featureDocsAndFiles.verifyButtonIocnDocsAndFiles(featureDocsAndFiles.java:161)\r\n\tat ✽.When User enters one of the docs \u0026 files(features/05-DocsAndFiles.feature:53)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "featureDocsAndFiles.verifyOnceOfFiles()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 803018700,
  "status": "passed"
});
});