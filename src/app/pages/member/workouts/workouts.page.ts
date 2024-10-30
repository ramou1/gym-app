import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  workouts: any = [
    {
      title: 'Chest & Triceps',
      image: 'assets/images/chest-triceps.jpg',
      startDate: '2020-01-01',
      endDate: '2020-01-31',
      exercises: [
        {
          title: 'Bench Press',
          image: 'assets/images/bench-press.jpg',
          description: 'The bench press is a great exercise for building a strong chest and triceps.'
        },
        {
          title: 'Tricep Dips',
          image: 'assets/images/tricep-dips.jpg',
          description: 'Tricep dips are a great exercise for building strong triceps.'
        }
      ]
    },
    {
      title: 'Back & Biceps',
      image: 'assets/images/back-biceps.jpg',
      startDate: '2020-02-01',
      endDate: '2020-02-28',
      exercises: [
        {
          title: 'Deadlift',
          image: 'assets/images/deadlift.jpg',
          description: 'The deadlift is a great exercise for building a strong back and biceps.'
        },
        {
          title: 'Pull Ups',
          image: 'assets/images/pull-ups.jpg',
          description: 'Pull ups are a great exercise for building strong biceps.'
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
