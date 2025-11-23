import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

interface TipPaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPaymentComplete: () => void;
}

const tipAmounts = [
  { label: "Kopi", amount: 15000 },
  { label: "Makan Siang", amount: 35000 },
  { label: "Satu Hari Kerja", amount: 100000 },
  { label: "Custom", amount: 0 },
];

const paymentMethods = [
  { id: "gopay", name: "GoPay", logo: "💚" },
  { id: "ovo", name: "OVO", logo: "💜" },
  { id: "dana", name: "DANA", logo: "💙" },
  { id: "bank", name: "Transfer Bank", logo: "🏦" },
];

export const TipPaymentModal = ({ open, onOpenChange, onPaymentComplete }: TipPaymentModalProps) => {
  const [selectedAmount, setSelectedAmount] = useState(15000);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handlePayment = () => {
    setTimeout(() => {
      onPaymentComplete();
      onOpenChange(false);
    }, 1000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Kirim Apresiasi
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center pt-2">
            Dukungan Anda langsung ke tangan pengrajin
          </p>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Artisan info */}
          <Card className="p-4 bg-secondary border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&q=80"
                  alt="Pak Joko"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">Pak Joko Santoso</p>
                <p className="text-xs text-muted-foreground">Pengrajin Batik Tulis</p>
              </div>
            </div>
          </Card>

          {/* Tip amount selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Pilih Nominal</label>
            <div className="grid grid-cols-2 gap-3">
              {tipAmounts.map((tip) => (
                <button
                  key={tip.label}
                  onClick={() => {
                    if (tip.amount === 0) {
                      setSelectedAmount(0);
                    } else {
                      setSelectedAmount(tip.amount);
                      setCustomAmount("");
                    }
                  }}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedAmount === tip.amount
                      ? "border-cta bg-cta/5"
                      : "border-border hover:border-border/60"
                  }`}
                >
                  <p className="text-xs text-muted-foreground mb-1">{tip.label}</p>
                  <p className="font-semibold text-foreground">
                    {tip.amount === 0 ? "Atur sendiri" : formatCurrency(tip.amount)}
                  </p>
                </button>
              ))}
            </div>

            {selectedAmount === 0 && (
              <input
                type="number"
                placeholder="Masukkan nominal"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cta"
              />
            )}
          </div>

          {/* Payment method selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Metode Pembayaran</label>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                    selectedPayment === method.id
                      ? "border-cta bg-cta/5"
                      : "border-border hover:border-border/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{method.logo}</span>
                    <span className="font-medium text-foreground">{method.name}</span>
                  </div>
                  {selectedPayment === method.id && (
                    <Check className="w-5 h-5 text-cta" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          {(selectedAmount > 0 || customAmount) && selectedPayment && (
            <Card className="p-4 bg-accent/5 border-accent/20">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nominal apresiasi</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(selectedAmount || parseInt(customAmount) || 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Biaya admin</span>
                  <span className="font-semibold text-foreground">Gratis</span>
                </div>
                <div className="pt-2 border-t border-border flex justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-bold text-foreground text-lg">
                    {formatCurrency(selectedAmount || parseInt(customAmount) || 0)}
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* CTA */}
          <Button
            onClick={handlePayment}
            disabled={(!selectedAmount && !customAmount) || !selectedPayment}
            size="lg"
            className="w-full bg-cta text-cta-foreground hover:bg-cta/90 h-12 font-semibold"
          >
            Lanjut Pembayaran
          </Button>

          <p className="text-xs text-center text-muted-foreground leading-relaxed px-4">
            100% apresiasi langsung ke rekening pengrajin. Transaksi aman dan terenkripsi.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
