import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'contact', 'address', 'utr'];
  dataSource = new MatTableDataSource<any>();
  form:FormGroup;
  data = {
    message: "Franchise data loaded successfully.",
    franchises: [
      {
        id: 1,
        name: "Franchise ABC",
        email: "contact@franchiseabc.com",
        contact: "+1234567890",
        address: "123 Franchise Street, City, Country",
        utr: "UTR123456789"
      },
      {
        id: 2,
        name: "Franchise XYZ",
        email: "contact@franchisexyz.com",
        contact: "+0987654321",
        address: "456 Another Street, City, Country",
        utr: "UTR987654321"
      }
    ]
  };

  constructor(private fb:FormBuilder)
  {
    this.form = this.fb.group({
      search:['']
    })
  }

  ngOnInit(): void {
    this.dataSource.data = this.data.franchises; // Initialize the data source
  }

  searchFilter(): void {
    const filteredFranchises = this.data.franchises.filter(franchise =>
      Object.values(franchise).some(value =>
        String(value).toLowerCase().includes(this.form.get('search')?.value.toLowerCase())
      )
    );

    this.dataSource.data = filteredFranchises; // Update table data
  }

  // downloadFile(): void {
   
  //   const xmlContent = this.convertToXML(this.dataSource.data);

   
  //   const blob = new Blob([xmlContent], { type: 'application/xml' });
  //   const url = window.URL.createObjectURL(blob);

  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'table_data.xml'; 
  //   a.click();

  //   window.URL.revokeObjectURL(url);
  // }

  // private convertToXML(data: any[]): string {
  //   let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<franchises>\n';

  //   data.forEach((item) => {
  //     xml += '  <franchise>\n';
  //     for (const key in item) {
  //       xml += `    <${key}>${item[key]}</${key}>\n`;
  //     }
  //     xml += '  </franchise>\n';
  //   });

  //   xml += '</franchises>';
  //   return xml;
  // }

  downloadFile(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.dataSource.data); // Convert data to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Franchises'); // Add the worksheet

    // Write the workbook and trigger download
    XLSX.writeFile(workbook, 'franchises_data.xlsx');
  }
}
