"use client";

import { useState } from "react";
import type { ConversationStatus } from "@/lib/data";

type Row = {
  id: string;
  customer: string;
  topic: string;
  status: ConversationStatus;
  confidence: number;
  time: string;
};

const filters = ["All", "Resolved", "Escalated", "Low confidence"] as const;
type Filter = (typeof filters)[number];

const badge: Record<ConversationStatus, string> = {
  Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Escalated: "bg-accent-soft text-accent-deep ring-accent/30",
  "Low confidence": "bg-amber-50 text-amber-800 ring-amber-600/25",
};

export function ConversationsTable({ rows }: { rows: Row[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? rows : rows.filter((r) => r.status === filter);

  return (
    <div className="card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
        <h2 className="font-semibold">Recent conversations</h2>
        <div role="group" aria-label="Filter by status" className="flex flex-wrap gap-1 rounded-full bg-paper p-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                filter === f ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="text-xs text-ink-mute">
            <tr>
              <th scope="col" className="px-5 py-3 font-medium">Conversation</th>
              <th scope="col" className="px-5 py-3 font-medium">Status</th>
              <th scope="col" className="px-5 py-3 font-medium">Confidence</th>
              <th scope="col" className="px-5 py-3 text-right font-medium">When</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {visible.map((r) => (
              <tr key={r.id} className="transition hover:bg-paper/70">
                <td className="px-5 py-3.5">
                  <p className="font-medium">{r.topic}</p>
                  <p className="font-mono text-xs text-ink-mute">
                    {r.id} · {r.customer}
                  </p>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${badge[r.status]}`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 rounded-full bg-line" aria-hidden="true">
                      <div
                        className={`h-full rounded-full ${r.confidence >= 0.8 ? "bg-emerald-500" : r.confidence >= 0.5 ? "bg-amber-500" : "bg-accent"}`}
                        style={{ width: `${Math.round(r.confidence * 100)}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs text-ink-soft">{Math.round(r.confidence * 100)}%</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-right text-ink-mute">{r.time}</td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-ink-mute">
                  No conversations with this status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
