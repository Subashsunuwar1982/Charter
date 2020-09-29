import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { Input } from "semantic-ui-react";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      loading: true,
      searchInput: "",
      originalData: []
    }
  }
  async getRestrauntData() {
    const headers = { 'Authorization': 'Api-Key q3MNxtfep8Gt' }
    const res = await axios.get('https://code-challenge.spectrumtoolbox.com/api/restaurants', { headers })
    console.log(res.data)
    this.setState({ loading: false, restaurants: res.data })
  }
  componentDidMount() {
    this.getRestrauntData()
  }

 

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };
  globalSearch = () => {
    // const headers = { 'Authorization': 'Api-Key q3MNxtfep8Gt' }
    // const res = fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', { headers })
    // let { searchInput } = this.state;
    // let filteredData = res.filter(value => {
    //   return (
    //     value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
    //     value.visits
    //       .toString()
    //       .toLowerCase()
    //       .includes(searchInput.toLowerCase())
    //   );
    // });
    // this.setState({ data: filteredData });
  };

  render() {
    let { data, searchInput } = this.state;
    const columns = [{
      Header: 'Name',
      accessor: 'name',
    }
      , {
      Header: 'City',
      accessor: 'city',
    }

      , {
      Header: 'State',
      accessor: 'state',
    }
      , {
      Header: 'Phone Number',
      accessor: 'telephone',
    },
    {
      Header: 'Genre',
      accessor: 'genre',
    }
    ]
    return (
      <div>
         <br />
        <Input
          size="large"
          name="searchInput"
          value={searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        />
        <br />
        <br />
        <ReactTable
          data={this.state.restaurants}
          columns={columns}
          defaultPageSize={10}
        />
      </div>

    )
  }
}

