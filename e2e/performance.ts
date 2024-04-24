/*
Left out ideas to use lighthouse - similar technique to test out page load.

page.waitForLoadState(LoadState.NETWORKIDLE);
String clsExpression =
    "var resultZ; var testZ = () => {new PerformanceObserver((list) => { resultZ = list.getEntries(); }).observe({type: 'layout-shift', buffered: true});}; testZ(); resultZ;";
String fidExpression =
    "var resultX; var testX = () => {new PerformanceObserver((list) => { resultX = list.getEntries(); }).observe({type: 'first-input', buffered: true});}; testX(); resultX;";
String lcpExpression =
    "var resultY; var testY = () => {new PerformanceObserver((list) => { resultY = list.getEntries(); }).observe({type: 'largest-contentful-paint', buffered: true});}; testY(); resultY;";
 
page.evaluate(clsExpression);
page.evaluate(fidExpression);
page.evaluate(lcpExpression);
*/
