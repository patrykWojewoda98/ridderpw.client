import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../App.css";

export function NewsPage() {
  const initialNews = [
    {
      id: 1,
      title: "Podpisanie nowego kontraktu z NASA",
      author: "John Doe",
      date: "2023-05-20",
      description:
        "W tym tygodniu podpisaliśmy nową umowę z NASA opiewającą na 2 miliony złotych! Z tego powodu na stołówce pracowniczej jest ciasto dla wszystkich pracowników",
      status: "Informacyjne",
    },
    {
      id: 2,
      title: "Zmiany w regulaminie pracy",
      author: "Jane Smith",
      date: "2023-06-15",
      description:
        "Wprowadziliśmy nowe zasady dotyczące urlopów i pracy zdalnej.",
      status: "Ważne",
    },
    {
      id: 3,
      title: "Nowy harmonogram szkoleń",
      author: "Mike Johnson",
      date: "2023-07-01",
      description:
        "Zapraszamy na nowe szkolenia z zakresu bezpieczeństwa i higieny pracy.",
      status: "Informacyjne",
    },
    {
      id: 4,
      title: "Spotkanie integracyjne",
      author: "Anna Brown",
      date: "2023-07-10",
      description:
        "Serdecznie zapraszamy na spotkanie integracyjne w przyszłym tygodniu.",
      status: "Informacyjne",
    },
    {
      id: 5,
      title: "Zmiana adresu siedziby firmy",
      author: "Paul Walker",
      date: "2023-08-05",
      description:
        "Od przyszłego miesiąca zmieniamy lokalizację naszej głównej siedziby.",
      status: "Ważne",
    },
    {
      id: 6,
      title: "Aktualizacja systemu ERP",
      author: "Emma Wilson",
      date: "2023-08-20",
      description: "Zaktualizowaliśmy nasz system ERP do najnowszej wersji.",
      status: "Informacyjne",
    },
    {
      id: 7,
      title: "Awaria systemu",
      author: "Oliver Taylor",
      date: "2023-09-01",
      description:
        "Informujemy o chwilowej awarii systemu. Pracujemy nad jej usunięciem.",
      status: "Ważne",
    },
    {
      id: 8,
      title: "Nowy członek zarządu",
      author: "Sophia Anderson",
      date: "2023-09-15",
      description: "Do naszego zarządu dołączył nowy członek, John Smith.",
      status: "Informacyjne",
    },
    {
      id: 9,
      title: "Przerwa techniczna",
      author: "James Martin",
      date: "2023-09-25",
      description:
        "W dniu jutrzejszym odbędzie się przerwa techniczna w godzinach 10:00 - 12:00.",
      status: "Informacyjne",
    },
    {
      id: 10,
      title: "Nowy projekt",
      author: "Ella Davis",
      date: "2023-10-01",
      description:
        "Rozpoczynamy nowy projekt związany z rozwojem oprogramowania.",
      status: "Informacyjne",
    },
  ];

  const [news, setNews] = useState(initialNews);

  const columns = [
    { name: "Tytuł", key: "title" },
    { name: "Autor", key: "author" },
    { name: "Data", key: "date" },
    { name: "Opis", key: "description" },
    { name: "Status", key: "status" },
    { name: "Oznacz jako przeczytane", key: "actions" },
  ];

  const statusColorMap = {
    Informacyjne: "#17a2b8", // Blue for informational
    Przeczytane: "#28a745", // Green for success
    Ważne: "#dc3545", // Red for danger
  };

  const changeReadStatus = (id) => {
    setNews((prevNews) =>
      prevNews.map((newsItem) =>
        newsItem.id === id ? { ...newsItem, status: "Przeczytane" } : newsItem
      )
    );
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th> {/* For row numbers */}
          {columns.map((column, index) => (
            <th key={index}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {news.map((newsItem, rowIndex) => (
          <tr key={newsItem.id}>
            <td>{rowIndex + 1}</td> {/* Row number */}
            {columns.map((column, colIndex) => {
              if (column.key === "actions") {
                return (
                  <td key={colIndex}>
                    <Button
                      variant="primary"
                      onClick={() => changeReadStatus(newsItem.id)}
                    >
                      Oznacz jako Przeczytane
                    </Button>
                  </td>
                );
              } else if (column.key === "status") {
                return (
                  <td
                    key={colIndex}
                    style={{ color: statusColorMap[newsItem.status] }}
                  >
                    {newsItem[column.key]}
                  </td>
                );
              } else {
                return <td key={colIndex}>{newsItem[column.key]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
