import * as moment from 'jalali-moment';
import { Component, OnInit } from '@angular/core';
import { JOBS_DATASET } from './fake-job-dataset';
//table imports

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tabIndex = 0;
  ngOnInit(): void {}

  //creating fake data to test
  getPersonelData(n = 1000): any[] {
    var list: any[] = [];
    let jobs = JOBS_DATASET.map((i) => {
      return { ...i, value: i.FIELD1, label: i.jobTitle };
    });
    var index = n;
    while (n != 0) {
      var job = jobs[Math.floor(Math.random() * 28)];
      list.push({
        rowNo: index - n + 1,
        option: {
          expand: false,
        },
        firstName: ['Serina', 'Kurl', 'Jane', 'Caino', 'Lwis', 'Eddie', null][
          Math.floor(Math.random() * 7)
        ],
        lastName: ['Doe', 'Smith', 'Tylor', 'Enrique', 'Ruiisi', 'McCal', null][
          Math.floor(Math.random() * 7)
        ],
        tel:
          (Math.floor(Math.random() * 9000) + 1000).toString() +
          (Math.floor(Math.random() * 90) + 10).toString() +
          (Math.floor(Math.random() * 90) + 10).toString() +
          ' (24+)',
        birthdate:
          (Math.floor(Math.random() * 11) + 1).toString() +
          '/' +
          (Math.floor(Math.random() * 30) + 1).toString() +
          '/' +
          (Math.floor(Math.random() * 20) + 2000).toString(),
        job1: job.FIELD1,
        jobTitle1: job.jobTitle,
        job2: job.FIELD1,
        jobTitle2: job.jobTitle,
        job3: job.FIELD1,
        jobTitle3: job.jobTitle,
        desc: `
        Better job descriptions
         attract better candidates. Optimized for job board 
         approval and SEO, our 700+ job description templates boost 
         exposure, provide inspiration and speed up hiring. Rich in the right 
         kind of content, they also lead to more qualified applicants.`,
      });
      n--;
    }
    return list;
  }

  convertDate(date) {
    if (date) {
      return moment(date).locale('fa').format('YYYY/MM/DD');
    }
    return '';
  }
}
