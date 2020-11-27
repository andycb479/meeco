import React from "react";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { Platform } from "react-native";

var htmlIncomes = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pdf Content</title>
    <style>
        h2 {
            text-align:left;
            color: green;
            line-height: 40px;
            border-bottom:1px solid  green;
            

        }
        td, th {
                border: 1px solid #dddddd;
                padding: 8px;
        }
        td{
            text-align-last: left;
        }
    </style>
</head>
<body>
    <h2>Incomes</h2>
    <table style="width: 100%; text-align: center; border-collapse: collapse;">
        <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Description</th>
        </tr>`
var htmlExpenses = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pdf Content</title>
            <style>
                h2 {
                    text-align:left;
                    color: rgb(241, 61, 30);
                    line-height: 40px;
                    border-bottom:1px solid  rgb(241, 61, 30);
                    
        
                }
                td, th {
                        border: 1px solid #dddddd;
                        padding: 8px;
                }
                td{
                    text-align-last: left;
                }
            </style>
        </head>
        <body>
            <h2>Expenses</h2>
            <table style="width: 100%; text-align: center; border-collapse: collapse;">
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Description</th>
                </tr>`
                
const nextHtmlPart = `</table></body></html>`;

const createAndSavePDF = async (html) => {
  try {
    const { uri } = await Print.printToFileAsync({ html });
    if (Platform.OS === "ios") {
      await Sharing.shareAsync(uri);
    } else {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        alert("PDF file exported")
        await MediaLibrary.createAssetAsync(uri);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
const pdfRowsGeneratorIncomes =(data)=>{
  var htmlRows ="";
  htmlRows+= htmlIncomes;
  data.forEach((income) => {
    htmlRows +=
      "<tr>"
      +"<td>" + new Date(income.date).toString().substring(4, 21) + "</td>"
      +"<td>" + income.name + "</td>" 
      +"<td>" + income.value+" lei" +"</td>" 
      +"<td>" + income.description +"</td>" 
      +"</tr>";
  });
  htmlRows+=nextHtmlPart;
  createAndSavePDF(htmlRows);
}
const pdfRowsGenerator = (data) => {
  var htmlRows ="";
  htmlRows+= htmlExpenses;
  data.forEach((expense) => {
    htmlRows +=
      "<tr>"
      +"<td>" + new Date(expense.date).toString().substring(4, 21) + "</td>"
      +"<td>" + expense.name + "</td>" 
      +"<td>" + expense.value+" lei" +"</td>" 
      +"<td>" + expense.category +"</td>" 
      +"<td>" + expense.description +"</td>" 
      +"</tr>";
  });
  htmlRows+=nextHtmlPart;
  createAndSavePDF(htmlRows);
};

const pdfCreatorHandler = (data,incomes) => {
    if(!incomes){
    pdfRowsGenerator(data)
  }
  else{
    pdfRowsGeneratorIncomes(data)
  }
};
export default { pdfCreatorHandler };
