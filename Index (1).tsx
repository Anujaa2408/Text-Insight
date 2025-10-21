import { useState, useEffect } from "react";
import { FileText, Type, List } from "lucide-react";

const Index = () => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    words: 0,
    letters: 0,
    sentences: 0,
  });

  useEffect(() => {
    // Calculate statistics in real-time
    const trimmedText = text.trim();
    
    // Count words (split by whitespace, filter empty strings)
    const words = trimmedText === "" ? 0 : trimmedText.split(/\s+/).filter(word => word.length > 0).length;
    
    // Count letters (excluding spaces and punctuation)
    const letters = text.replace(/[^a-zA-Z]/g, "").length;
    
    // Count sentences (by periods, exclamation marks, and question marks)
    const sentences = trimmedText === "" ? 0 : (text.match(/[.!?]+/g) || []).length;

    setStats({ words, letters, sentences });
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Text Analyzer
          </h1>
          <p className="text-muted-foreground text-lg">
            Analyze your text instantly - count words, letters, and sentences in real-time
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {/* Text Input Card */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <label htmlFor="text-input" className="text-lg font-semibold text-card-foreground">
                Your Text
              </label>
              {text.length > 0 && (
                <button
                  onClick={handleClear}
                  className="rounded-lg px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  Clear
                </button>
              )}
            </div>
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your text here..."
              className="min-h-[300px] w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
            />
          </div>

          {/* Statistics Cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Words Card */}
            <div className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:scale-105 hover:shadow-[var(--shadow-card)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="rounded-lg bg-[hsl(var(--stat-words)/0.1)] p-2.5">
                  <FileText className="h-5 w-5 text-[hsl(var(--stat-words))]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Words</p>
                <p className="text-3xl font-bold text-[hsl(var(--stat-words))] transition-all">
                  {stats.words.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Letters Card */}
            <div className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:scale-105 hover:shadow-[var(--shadow-card)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="rounded-lg bg-[hsl(var(--stat-letters)/0.1)] p-2.5">
                  <Type className="h-5 w-5 text-[hsl(var(--stat-letters))]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Letters</p>
                <p className="text-3xl font-bold text-[hsl(var(--stat-letters))] transition-all">
                  {stats.letters.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Sentences Card */}
            <div className="group rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:scale-105 hover:shadow-[var(--shadow-card)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="rounded-lg bg-[hsl(var(--stat-sentences)/0.1)] p-2.5">
                  <List className="h-5 w-5 text-[hsl(var(--stat-sentences))]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Sentences</p>
                <p className="text-3xl font-bold text-[hsl(var(--stat-sentences))] transition-all">
                  {stats.sentences.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
