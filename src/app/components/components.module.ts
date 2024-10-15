import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { WorkoutDetailsComponent } from "./workout-details/workout-details.component";

@NgModule({
    declarations: [
        WorkoutDetailsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        WorkoutDetailsComponent
    ]
})

export class ComponentsModule { }