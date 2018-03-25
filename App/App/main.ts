import "./polyfills";
import "./app/styles/less/styles.less";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);