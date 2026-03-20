interface NotificationsPopoverProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const NotificationsPopover = ({ isOpen, onToggle }: NotificationsPopoverProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-lg ring-1 ring-black/5">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Notificações</h3>
          <button
            className="text-sm text-gray-500 hover:text-gray-700"
            onClick={onToggle}
          >
            Fechar
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-600">Nenhuma notificação por enquanto.</p>
      </div>
    </div>
  );
};