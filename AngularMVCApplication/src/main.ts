import "./polyfills";

// Common app styles
import "./app/styles/less/app.less";
import "./app/styles/scss/app.scss";
//import "./app/animations";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);