'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { SearchResultsProps } from '../../types';



export default function SearchResults({
    items,
    onToolClick,
}: SearchResultsProps) {
    const itemsPerPage = 12;
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [search]);

    const q = search.trim().toLowerCase();
    const filtered = q ? items.filter(t => t.name.toLowerCase().includes(q)) : items;

    // Usa utilitário de paginação (separado)
    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filtered.slice(start, end);

    return (
        <section>
            <div className="mb-4">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar ferramentas..."
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {paginatedItems.length > 0 ? (
                    paginatedItems.map(tool => (
                        <Card key={tool.app_id} name={tool.name} icon={tool.icon} color={tool.color} onClick={() => onToolClick(tool)} />
                    ))
                ) : (
                    <div className="text-center text-gray-500 py-6">
                        {q ? `Nenhuma ferramenta encontrada para "${search}"` : 'Nenhuma ferramenta disponível'}
                    </div>
                )}
            </div>

            {paginatedItems.length > 0 && (
                <div className="flex justify-center gap-4 mt-6">
                    <Button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1} name="Anterior" />
                    <span>Página {page} de {totalPages}</span>
                    <Button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages} name="Próxima" />
                </div>
            )}
        </section>
    );
}