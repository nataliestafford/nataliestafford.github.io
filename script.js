function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  alert(startdate);
  alert(enddate);
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>Data Table</h2>
<table id="data-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Speed</th>
            <th>Result</th>
            <th>Date</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <!-- Data will be inserted here -->
    </tbody>
</table>

<script>
    async function fetchData() {
        try {
            const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson');
            const data = await response.json();
            populateTable(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function populateTable(data) {
        const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
        data.forEach(item => {
            const row = tableBody.insertRow();
            const dateTime = item.datetime.split(' '); // Split date and time
            const date = dateTime[0];
            const time = dateTime[1];

            row.insertCell(0).textContent = item.id;
            row.insertCell(1).textContent = item.speed;
            row.insertCell(2).textContent = item.result;
            row.insertCell(3).textContent = date;
            row.insertCell(4).textContent = time;
        });
    }

    // Fetch data on page load
    window.onload = fetchData;
</script>

</body>
</html>
