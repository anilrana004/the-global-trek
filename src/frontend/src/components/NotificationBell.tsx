import { createActor } from "@/backend";
import type { Notification } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { Bell, Check, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function NotificationBell() {
  const { actor, isFetching } = useActor(createActor);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!actor || isFetching) return;
    async function fetchNotifications() {
      try {
        if (!actor) return;
        const result = await actor.getNotifications();
        setNotifications(result);
      } catch {
        setNotifications([]);
      }
    }
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 60_000);
    return () => clearInterval(interval);
  }, [actor, isFetching]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  async function handleMarkRead(id: bigint) {
    try {
      await actor?.markNotificationRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
      );
    } catch {
      /* ignore */
    }
  }

  async function handleDelete(id: bigint) {
    try {
      await actor?.deleteNotification(id);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch {
      /* ignore */
    }
  }

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  function formatDate(createdAt: bigint) {
    const ms = Number(createdAt) / 1_000_000;
    const date = new Date(ms);
    const diff = Date.now() - date.getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 2) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Bell button */}
      <button
        type="button"
        aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative p-2 text-white/70 hover:text-white transition-colors"
        data-ocid="navbar.notification_bell"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span
            className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold leading-none"
            style={{ background: "#E53935", color: "#fff" }}
            aria-hidden="true"
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="notif-panel"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full mt-2 z-50 rounded-2xl shadow-2xl border overflow-hidden"
            style={{
              width: 320,
              background: "#0A2E1A",
              borderColor: "#1A7A4C",
            }}
            aria-label="Notifications"
            data-ocid="navbar.notifications_panel"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-sm">
                  Notifications
                </span>
                {unreadCount > 0 && (
                  <span
                    className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold leading-none"
                    style={{ background: "#1A7A4C", color: "#fff" }}
                  >
                    {unreadCount} new
                  </span>
                )}
              </div>
              {notifications.length > 0 && (
                <button
                  type="button"
                  className="text-xs font-medium transition-colors"
                  style={{ color: "#2ECC71" }}
                  onClick={async () => {
                    for (const n of notifications.filter((x) => !x.isRead)) {
                      await handleMarkRead(n.id);
                    }
                  }}
                  data-ocid="navbar.notifications_mark_all_read"
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* Body */}
            <div className="overflow-y-auto" style={{ maxHeight: 360 }}>
              {notifications.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center py-10 gap-2"
                  data-ocid="navbar.notifications.empty_state"
                >
                  <Bell
                    className="w-8 h-8"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  />
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    No notifications yet
                  </p>
                </div>
              ) : (
                notifications.map((n, i) => (
                  <div
                    key={String(n.id)}
                    className="flex gap-3 px-4 py-3 transition-colors"
                    style={{
                      background: n.isRead
                        ? "transparent"
                        : "rgba(26,122,76,0.1)",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                    data-ocid={`navbar.notifications.item.${i + 1}`}
                  >
                    {/* Unread dot */}
                    <div className="pt-1.5 shrink-0">
                      {!n.isRead ? (
                        <span
                          className="block w-2 h-2 rounded-full"
                          style={{ background: "#1A7A4C" }}
                        />
                      ) : (
                        <span className="block w-2 h-2" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold leading-tight text-white">
                        {n.title}
                      </p>
                      <p
                        className="text-xs mt-0.5 leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        {n.message}
                      </p>
                      {n.actionUrl && (
                        <a
                          href={n.actionUrl}
                          className="inline-block mt-1 text-xs font-semibold transition-colors"
                          style={{ color: "#2ECC71" }}
                          onClick={() => setOpen(false)}
                          data-ocid={`navbar.notifications.book_now.${i + 1}`}
                        >
                          Book Now →
                        </a>
                      )}
                      <p
                        className="text-[10px] mt-1"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        {formatDate(n.createdAt)}
                      </p>
                    </div>
                    {/* Actions */}
                    <div className="flex flex-col gap-1 shrink-0">
                      {!n.isRead && (
                        <button
                          type="button"
                          aria-label="Mark as read"
                          onClick={() => handleMarkRead(n.id)}
                          className="p-1 rounded-full transition-colors hover:bg-white/10"
                          data-ocid={`navbar.notifications.mark_read.${i + 1}`}
                        >
                          <Check
                            className="w-3.5 h-3.5"
                            style={{ color: "#2ECC71" }}
                          />
                        </button>
                      )}
                      <button
                        type="button"
                        aria-label="Delete notification"
                        onClick={() => handleDelete(n.id)}
                        className="p-1 rounded-full transition-colors hover:bg-white/10"
                        data-ocid={`navbar.notifications.delete.${i + 1}`}
                      >
                        <Trash2
                          className="w-3.5 h-3.5"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
