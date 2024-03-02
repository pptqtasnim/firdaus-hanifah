"use client";

const TableAcara = () => {
  const rows = [
    {
      key: "1",
      waktu: "08.30 - 09.00",
      durasi: "30'",
      acara: "Khotmil Qur’an",
    },
    {
      key: "2",
      waktu: "09.00 - 09.30",
      durasi: "30'",
      acara: "Pembacaan maulid",
    },
    {
      key: "3",
      waktu: "09.30 - 09.55",
      durasi: "25'",
      acara: "Sambutan",
    },
    {
      key: "4",
      waktu: "09.55 - 10.10",
      durasi: "15'",
      acara: "Apresiasi santri",
    },
    {
      key: "5",
      waktu: "10.10 - 10.40",
      durasi: "30'",
      acara: "Mauidhoh Hasanah",
    },
    {
      key: "6",
      waktu: "10.40 - 10.50",
      durasi: "10'",
      acara: "Doa penutup",
    },
  ];
  const columns = [
    {
      key: "no",
      label: "No.",
    },
    {
      key: "waktu",
      label: "Waktu",
    },
    {
      key: "durasi",
      label: "Durasi",
    },
    {
      key: "acara",
      label: "AGENDA",
    },
  ];
  return (
    <table className="table table-auto">
      <thead>
        <tr className="text-center text-primary">
          {columns.map((column, i) => (
            <th key={i}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className="text-center text-primary text-[7px] font-semibold"
          >
            <td>{i + 1}</td>
            <td>{row.waktu}</td>
            <td>{row.durasi}</td>
            <td>{row.acara}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableAcara;
