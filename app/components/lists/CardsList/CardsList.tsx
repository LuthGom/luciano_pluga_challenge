'use client';
import styles from './CardsList.module.css';
import useTools from '@/app/hooks/useTools';
import ToolModal from '../../modals/ToolModal/ToolModal';
import SearchResults from '../../search/SearchResults/SearchResults';
interface CardsListProps {
  URL: string;
}

export default function CardsList({ URL }: CardsListProps) {
  const { isOpen, closeModal, selectedTool, items, handleToolClick, recent } = useTools(URL);

  return (
    <div className={styles.container}>
      <SearchResults items={items} onToolClick={handleToolClick} />
      <ToolModal isOpen={isOpen}
        onClose={closeModal}
        tool={selectedTool}
        onToolClick={handleToolClick}
        lastedTools={recent} />
    </div>
  );
}