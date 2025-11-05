'use client';
import { useTools } from '../../hooks/useTools';
import ToolModal from '../modals/ToolModal';
import SearchResults from '../search/SearchResults';
interface CardsListProps {
  URL: string;
}

export default function CardsList({ URL }: CardsListProps) {
  const { isOpen, closeModal, selectedTool, items, handleToolClick, recent } = useTools(URL);

  return (
    <div>
      <SearchResults items={items} onToolClick={handleToolClick} />
      <ToolModal isOpen={isOpen}
        onClose={closeModal}
        tool={selectedTool}
        onToolClick={handleToolClick}
        lastedTools={recent} />
    </div>
  );
}