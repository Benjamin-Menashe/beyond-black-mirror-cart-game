
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ItemsTable: React.FC = () => {
  const episodes = [
    { season: 1, episode: 1, hebrewName: 'ההמנון הלאומי', englishName: 'The National Anthem', price: 7.60 },
    { season: 1, episode: 2, hebrewName: '15 מיליון נקודות', englishName: 'Fifteen Million Merits', price: 8.00 },
    { season: 1, episode: 3, hebrewName: 'תולדות חייך', englishName: 'The Entire History of You', price: 8.50 },
    { season: 2, episode: 1, hebrewName: 'תכף אשוב', englishName: 'Be Right Back', price: 7.90 },
    { season: 2, episode: 2, hebrewName: 'דב לבן', englishName: 'White Bear', price: 8.00 },
    { season: 2, episode: 3, hebrewName: 'הרגע של וולדו', englishName: 'The Waldo Moment', price: 6.50 },
    { season: 'Sp', episode: '-', hebrewName: 'חג מולד לבן', englishName: 'White Christmas', price: 9.10 },
    { season: 3, episode: 1, hebrewName: 'תגובת שרשרת', englishName: 'Nosedive', price: 8.30 },
    { season: 3, episode: 2, hebrewName: 'נסיעת מבחן', englishName: 'Playtest', price: 8.00 },
    { season: 3, episode: 3, hebrewName: 'שתוק ותרקוד', englishName: 'Shut Up and Dance', price: 8.40 },
    { season: 3, episode: 4, hebrewName: 'סאן ג\'וניפרו', englishName: 'San Junipero', price: 8.50 },
    { season: 3, episode: 5, hebrewName: 'משחקים באש', englishName: 'Men Against Fire', price: 7.50 },
    { season: 3, episode: 6, hebrewName: 'השנואים במדינה', englishName: 'Hated in the Nation', price: 8.40 },
    { season: 4, episode: 1, hebrewName: 'החללית קאליסטר', englishName: 'USS Callister', price: 8.30 },
    { season: 4, episode: 2, hebrewName: 'ארקאנג\'ל', englishName: 'Arkangel', price: 7.30 },
    { season: 4, episode: 3, hebrewName: 'קרוקודיל', englishName: 'Crocodile', price: 7.30 },
    { season: 4, episode: 4, hebrewName: 'Hang the DJ', englishName: 'Hang the DJ', price: 8.70 },
    { season: 4, episode: 5, hebrewName: 'מטאלהד', englishName: 'Metalhead', price: 6.60 },
    { season: 4, episode: 6, hebrewName: 'מוזיאון שחור', englishName: 'Black Museum', price: 8.60 },
    { season: 'Sp', episode: '-', hebrewName: 'בנדרסנאץ\'', englishName: 'Bandersnatch', price: 7.10 },
    { season: 5, episode: 1, hebrewName: 'סטרייקינג וייפרס', englishName: 'Striking Vipers', price: 6.80 },
    { season: 5, episode: 2, hebrewName: 'סמית\'רינס', englishName: 'Smithereens', price: 7.50 },
    { season: 5, episode: 3, hebrewName: 'רייצ\'ל ג\'ק ואשלי טו', englishName: 'Rachel, Jack and Ashley Too', price: 6.10 },
    { season: 6, episode: 1, hebrewName: 'גו\'אן פשוט איומה', englishName: 'Joan is Awful', price: 7.40 },
    { season: 6, episode: 2, hebrewName: 'לוך הנרי', englishName: 'Loch Henry', price: 7.30 },
    { season: 6, episode: 3, hebrewName: 'מעבר לים', englishName: 'Beyond the Sea', price: 7.40 },
    { season: 6, episode: 4, hebrewName: 'מייזי דיי', englishName: 'Mazey Day', price: 5.30 },
    { season: 6, episode: 5, hebrewName: 'שטן 79', englishName: 'Demon 79', price: 6.70 },
    { season: 7, episode: 1, hebrewName: 'אנשים פשוטים', englishName: 'Common People', price: 8.10 },
    { season: 7, episode: 2, hebrewName: 'בט נואר', englishName: 'Bete Noir', price: 7.20 },
    { season: 7, episode: 3, hebrewName: 'מלון ריברי', englishName: 'Hotel Reverie', price: 6.70 },
    { season: 7, episode: 4, hebrewName: 'צעצוע', englishName: 'Plaything', price: 7.10 },
    { season: 7, episode: 5, hebrewName: 'הספד', englishName: 'Eulogy', price: 8.10 },
    { season: 7, episode: 6, hebrewName: 'חללית קליסטר 2', englishName: 'USS Callister: Into Infinity', price: 8.10 },
  ];

  return (
    <div className="bg-white border border-black rounded-xl shadow-lg p-3 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-black mb-3 md:mb-4 flex items-center gap-2">
        📋 מחירון פרקים
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 border-black">
              <TableHead className="text-black font-semibold border-r border-black w-12 px-1 text-center text-xs md:text-sm">עונה</TableHead>
              <TableHead className="text-black font-semibold border-r border-black w-12 px-1 text-center text-xs md:text-sm">פרק</TableHead>
              <TableHead className="text-black font-semibold border-r border-black px-2 text-xs md:text-sm">שם הפרק</TableHead>
              <TableHead className="text-black font-semibold border-r border-black px-2 text-xs md:text-sm hidden sm:table-cell">שם באנגלית</TableHead>
              <TableHead className="text-black font-semibold text-right px-2 text-xs md:text-sm">מחיר</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {episodes.map((episode, index) => (
              <TableRow key={index} className="hover:bg-purple-50 border-b border-gray-300">
                <TableCell className="text-black border-r border-gray-300 text-center w-12 px-1 text-xs md:text-sm">
                  {episode.season}
                </TableCell>
                <TableCell className="text-black border-r border-gray-300 text-center w-12 px-1 text-xs md:text-sm">
                  {episode.episode}
                </TableCell>
                <TableCell className="text-black border-r border-gray-300 px-2 text-xs md:text-sm">{episode.hebrewName}</TableCell>
                <TableCell className="text-black border-r border-gray-300 px-2 text-xs md:text-sm hidden sm:table-cell">{episode.englishName}</TableCell>
                <TableCell className="text-right font-semibold text-black px-2 text-xs md:text-sm">
                  ${episode.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ItemsTable;
