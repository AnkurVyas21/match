import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { httpService } from '../services/http.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  form: FormGroup;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'id', 'name', 'address', 'mobile', 'role',
    'batting_handedness', 'bowling_handedness', 
    'j_name', 'j_size', 'j_number', 'j_type', 'utr'
  ];

  data = {
    "message": "players data loaded successfully.",
    "players": [
      {
        "id": 1,
        "name": "John Doe",
        "address": "123 Cricket Street, City, Country",
        "mobile": "+1234567890",
        "role": "Batsman",
        "batting_handedness": "Right",
        "bowling_handedness": "Right",
        "j_name": "Cricket Jersey",
        "j_size": "M",
        "j_number": "25",
        "j_type": "Home",
        "utr": "UTR123456789"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "address": "456 Cricket Avenue, City, Country",
        "mobile": "+0987654321",
        "role": "Bowler",
        "batting_handedness": "Left",
        "bowling_handedness": "Left",
        "j_name": "Cricket Jersey",
        "j_size": "L",
        "j_number": "10",
        "j_type": "Away",
        "utr": "UTR987654321"
      }
    ]
  };

  constructor(private formBuilder: FormBuilder, private http:httpService) {
    this.form = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.dataSource.data = this.data.players; // Initialize table data
    this.getData()
  }

  getData()
  {
    let uri = null;
  let APIparams = {
    apiKey: 'players  ',
    uri: uri,
  };
  this.http.get(APIparams).subscribe((ServerRes) => {
    if (ServerRes.success === true) {
      
    }
  });
  }

  searchFilter(): void {
    const searchValue = this.form.get('search')?.value.toLowerCase() || '';

    const filteredPlayers = this.data.players.filter(player =>
      Object.values(player).some(value =>
        String(value).toLowerCase().includes(searchValue)
      )
    );

    this.dataSource.data = filteredPlayers; // Update the table data
  }

  downloadFile(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.dataSource.data); // Convert data to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Players'); // Add the worksheet
  
    // Write the workbook and trigger download
    XLSX.writeFile(workbook, 'players_data.xlsx');
  }
}
