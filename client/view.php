<!DOCTYPE html>
<html>
<head>
    <title>Table with database</title>
    <style>


    table {
        border-collapse: collapse;
        width: 90%;
        color: #588c7e;
        font-family: monospace;
        font-size: 25px;
        text-align: left;
        }

        th {
        background-color: #588c7e;
        color: red;
        }


        tr:nth-child(even) {background-color: #f2f2f2}
    </style>
</head>
<body>
<table>
<tr>

<th>Idtesdtfuj</th>
<th>Flow Sensors</th>
<th>Value!</th>
</tr>
<?php
    echo "working";
    $conn = mysqli_connect("192.168.1.13", "root", "raspberry", "capstone");
    // Check connection
    if ($conn->connect_error) {
        echo "Well, dead";
    die("Connection failed: " . $conn->connect_error);
    }
    echo $sql = "SELECT id, `value`, createdAt FROM sensor";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    echo "<tr><td>" . $row["id"]. "</td><td>" . $row["value"] . "</td><td>"
    . $row["createdAt"]. "</td></tr>";
    }
    echo "</table>";
    } else { echo "0 results"; }
    $conn->close();
?>
</table>
</body>
</html>