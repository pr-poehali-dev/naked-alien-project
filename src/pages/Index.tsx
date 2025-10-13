import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = [
    { name: 'Творчество', icon: 'Palette', count: 12 },
    { name: 'Технологии', icon: 'Laptop', count: 8 },
    { name: 'Путешествия', icon: 'Compass', count: 15 },
    { name: 'Кулинария', icon: 'Coffee', count: 6 },
  ];

  const articles = [
    {
      id: 1,
      title: 'Искусство креативного письма',
      excerpt: 'Откройте для себя секреты создания захватывающих историй, которые вдохновляют и увлекают читателей.',
      image: 'https://cdn.poehali.dev/projects/ab11b749-6959-4c0b-9825-b626ad9020b8/files/bc7a6075-c81d-4c11-bf2e-82e4f5307854.jpg',
      tags: ['Творчество', 'Писательство'],
      date: '15 октября 2025',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: 'Будущее технологий',
      excerpt: 'Исследуем инновации, которые изменят нашу жизнь в ближайшие годы: от ИИ до квантовых компьютеров.',
      image: 'https://cdn.poehali.dev/projects/ab11b749-6959-4c0b-9825-b626ad9020b8/files/57209dc7-2b46-44dc-aab5-ae4251862c65.jpg',
      tags: ['Технологии', 'Инновации'],
      date: '12 октября 2025',
      readTime: '7 мин'
    },
    {
      id: 3,
      title: 'Дизайн как искусство',
      excerpt: 'Как создавать визуальные проекты, которые не только красивы, но и функциональны.',
      image: 'https://cdn.poehali.dev/projects/ab11b749-6959-4c0b-9825-b626ad9020b8/files/c8a98f96-a8c8-4391-955b-6d72e097da79.jpg',
      tags: ['Творчество', 'Дизайн'],
      date: '10 октября 2025',
      readTime: '6 мин'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="PenTool" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Creative Blog
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#articles" className="text-foreground/70 hover:text-foreground transition-colors">Статьи</a>
              <a href="#categories" className="text-foreground/70 hover:text-foreground transition-colors">Категории</a>
              <a href="#author" className="text-foreground/70 hover:text-foreground transition-colors">Об авторе</a>
              <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Исследуй мир через
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> креативные идеи</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Вдохновляющие статьи о творчестве, технологиях и искусстве
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск статей по названию или содержанию..."
                className="pl-12 h-14 text-lg rounded-xl shadow-lg border-2 focus:border-primary transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedTag(selectedTag === category.name ? null : category.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                    selectedTag === category.name ? 'bg-primary' : 'bg-secondary/20'
                  }`}>
                    <Icon name={category.icon as any} size={24} className={selectedTag === category.name ? 'text-white' : 'text-secondary'} />
                  </div>
                  <h4 className="font-semibold mb-1">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">{category.count} статей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">
              {selectedTag ? `Категория: ${selectedTag}` : 'Последние статьи'}
            </h3>
            {selectedTag && (
              <Button variant="outline" onClick={() => setSelectedTag(null)}>
                <Icon name="X" size={16} className="mr-2" />
                Сбросить фильтр
              </Button>
            )}
          </div>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="FileSearch" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">Статьи не найдены</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-foreground">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {article.readTime}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      {article.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => setSelectedTag(tag)}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Читать
                        <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="author" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="User" size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Об авторе</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Привет! Я создатель этого блога, увлеченный творчеством, технологиями и искусством.
              Здесь я делюсь своими мыслями, опытом и идеями, которые вдохновляют меня каждый день.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Icon name="Twitter" size={20} className="mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Github" size={20} className="mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Linkedin" size={20} className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold mb-4">Свяжитесь со мной</h3>
            <p className="text-muted-foreground mb-6">
              Есть вопросы или предложения? Буду рад услышать от вас!
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Send" size={20} className="mr-2" />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Creative Blog. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
