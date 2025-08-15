import React from 'react';
import { InputField } from './components/InputField/InputField';
import { DataTable, Column } from './components/DataTable/DataTable';

type User = { id: number; name: string; email: string; age: number };

const columns: Column<User>[] = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'age', header: 'Age', sortable: true, align: 'right' },
];

const data: User[] = [
  { id: 1, name: 'Aditi', email: 'aditi@example.com', age: 23 },
  { id: 2, name: 'Rahul', email: 'rahul@example.com', age: 28 },
  { id: 3, name: 'Neha', email: 'neha@example.com', age: 21 },
];

export default function App() {
  const [query, setQuery] = React.useState('');
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">React UI Assignment</h1>
      <InputField label="Search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type here..." />
      <DataTable data={data.filter(d => d.name.toLowerCase().includes(query.toLowerCase()))} columns={columns} selectable />
    </div>
  );
}
