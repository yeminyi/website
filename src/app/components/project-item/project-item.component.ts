import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';
import { cardAnim } from '../../anim';
import { Project } from '../../../config.interface';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [cardAnim]
})
export class ProjectItemComponent {
  @Input() item: Project;
  constructor() {}

  ngOnInit() {}
  @HostBinding('@card') cardState = 'out';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }
}
