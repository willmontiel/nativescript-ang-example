import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: '<TextField hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField><TextField hint="Password" secure="true"></TextField><Button text="Sign in"></Button><Button text="Sign up for Groceries"></Button>'
})
export class AppComponent {}