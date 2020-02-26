import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('list1', [
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(0)'
      })),
      transition('void <=> *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* <=> void', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(0)',
            opacity: 1,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.5
          }),
          style({
            transform: 'translateX(-75px)',
            opacity: 0,
            offset: 0.8
          }),
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 1
          })
        ]))
      ]),
    ]),
    trigger('list2', [
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(0)'
      })),
      transition('void <=> *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            offset: 1
          })
        ]))
      ]),
      transition('* <=> void', [
        animate(3000, style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }))
      ])
    ]),
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'transform': 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'green',
        'transform': 'translateX(100px) scale(1)',
      })),
      state('shrunken', style({
        'background-color': 'blue',
        'transform': 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(3000, style({
          borderRadius: '60px'
        })),
        animate(1000, style({
          borderRadius: '10px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  state='normal';
  wildState='normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item){
      var index = this.list.indexOf(item);
      if (index !== -1) this.list.splice(index, 1);
    }

    onAnimate(){
      this.state = this.state == 'normal' ? this.state = 'highlighted' :  this.state = 'normal';
      this.wildState = this.wildState == 'normal' ? this.wildState = 'highlighted' :  this.wildState = 'normal';
    }
    onShrink(){
      this.wildState = 'shrunken';
    }
}
