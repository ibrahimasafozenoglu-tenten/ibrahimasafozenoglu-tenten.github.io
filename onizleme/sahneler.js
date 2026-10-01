// yakala.py tarafından üretildi -- elle düzenlemeyin
window.ONIZLEME = {
 "adimlar": [
  {
   "id": "proje",
   "ad": "Proje"
  },
  {
   "id": "hazirla",
   "ad": "Hazırla"
  },
  {
   "id": "parca",
   "ad": "Parça kodları"
  },
  {
   "id": "isaretle",
   "ad": "İşaretleme"
  },
  {
   "id": "teknik",
   "ad": "Teknik resim"
  },
  {
   "id": "eslestir",
   "ad": "Eşleştirme ve WPS"
  },
  {
   "id": "kontrol",
   "ad": "Kontrol"
  },
  {
   "id": "excel",
   "ad": "Excel çıktısı"
  }
 ],
 "sahneler": [
  {
   "adim": "proje",
   "baslik": "Projelerim",
   "gorsel": "img/01_projelerim.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Kaynak iş emri otomasyonu",
     "metin": "Bu ön izleme, programın gerçek ekranlarından oluşur. Soldaki operasyonlara tıklayarak süreci baştan sona inceleyebilir, kartlarla ilerleyebilirsiniz."
    },
    {
     "hedef": [
      3.4,
      18.49,
      20.14,
      19.77
     ],
     "baslik": "Her operasyon bir proje",
     "metin": "Bir montaj grubunun Kaynak, Çapak ve Taşlama iş emirleri tek projede tutulur. Kayıt otomatiktir; her 10 dakikada bir yedek alınır."
    }
   ]
  },
  {
   "adim": "hazirla",
   "baslik": "Hazırla: SOP bilgileri ve saha fotoğrafları",
   "gorsel": "img/02_hazirla.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": [
      1.39,
      14.07,
      27.36,
      29.07
     ],
     "baslik": "SOP bilgileri bir kez girilir",
     "metin": "Proje, grup ve operasyon bilgileri her iş emri sayfasının başlığına otomatik yazılır."
    },
    {
     "hedef": [
      31.46,
      29.53,
      65.97,
      66.4
     ],
     "baslik": "Saha fotoğrafları, çekim sırasıyla",
     "metin": "Fotoğraflar toplu eklenir; program onları çekim zamanına göre kendiliğinden sıralar. WhatsApp'tan gelen, tarih bilgisi silinmiş fotoğraflarda bile dosya adındaki sıra kullanılır. Sürükleyerek sıra değiştirilebilir, adım numarası değişmez."
    },
    {
     "hedef": [
      2.57,
      82.79,
      14.38,
      3.72
     ],
     "baslik": "Teknik resim çalışma alanı",
     "metin": "Alın ve köşe kaynakları teknik resimle eşleştirilir; çalışma alanı ayrı pencerede açılır."
    }
   ]
  },
  {
   "adim": "parca",
   "baslik": "Parça kütüphanesi",
   "gorsel": "img/03_parca_kutuphanesi.jpg",
   "boyut": [
    1180,
    720
   ],
   "kartlar": [
    {
     "hedef": [
      0.93,
      9.72,
      60.17,
      83.47
     ],
     "baslik": "Reçeteden okunan parça kodları",
     "metin": "Parça kodları reçete fişinin fotoğrafından çevrimdışı OCR ile okunur ve satır satır onaylanır. Malzeme ve kalınlık, WPS eşleştirmesinin girdisidir."
    },
    {
     "hedef": [
      61.44,
      9.72,
      37.63,
      83.47
     ],
     "baslik": "Her kodun görseli",
     "metin": "Reçetedeki parça görseli kodla birlikte saklanır; işaretleme sırasında doğru parçayı seçmek kolaylaşır."
    }
   ]
  },
  {
   "adim": "parca",
   "baslik": "Reçeteden parça kodu ekleme",
   "gorsel": "img/03b_recete.jpg",
   "boyut": [
    1180,
    720
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Reçete fişinin fotoğrafı yeterli",
     "metin": "Fişteki her 'Kasa:' satırı bulunur; kod ve satırın parça görseli birlikte okunur. Bu fişten 9 satır, internet bağlantısı olmadan, bilgisayarın kendisinde okundu."
    },
    {
     "hedef": null,
     "baslik": "Mühendis onaylar",
     "metin": "Yanlış okunan kod düzeltilir, istenmeyen satırın işareti kaldırılır. Onaylanmayan hiçbir şey kütüphaneye girmez."
    }
   ]
  },
  {
   "adim": "isaretle",
   "baslik": "İşaretle: kalıba yerleştirme",
   "gorsel": "img/04_isaretle_kalip.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": [
      0.83,
      23.37,
      14.72,
      75.23
     ],
     "baslik": "Adımlar montaj sırasıyla",
     "metin": "Her satır bir saha fotoğrafı: adım numarası, işaret sayısı ve atanan parça kodları."
    },
    {
     "hedef": [
      0.0,
      11.98,
      100.0,
      5.47
     ],
     "baslik": "İşaret araçları",
     "metin": "Punta, Alın, Köşe ve Kalıp. Kalıp işareti 'bu parça bu adımda kalıba yerleşti' demektir; kaynak değildir."
    },
    {
     "hedef": [
      16.46,
      18.84,
      58.06,
      78.14
     ],
     "baslik": "Fotoğraf üzerinde işaretleme",
     "metin": "İşaretler fotoğrafın üzerine çizilir; Excel'e aynen bu görüntü gider."
    }
   ]
  },
  {
   "adim": "isaretle",
   "baslik": "İşaretle: punta",
   "gorsel": "img/05_isaretle_punta.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": [
      16.46,
      18.84,
      58.06,
      78.14
     ],
     "baslik": "Punta noktaları",
     "metin": "Her punta tek tıkla yerleşir; boyutu ve yeri sürükleyerek ayarlanır, geri al / yinele her an çalışır."
    },
    {
     "hedef": [
      75.42,
      18.84,
      23.75,
      79.77
     ],
     "baslik": "Seçili işaretin bilgileri",
     "metin": "Hangi parçaları birleştirdiği, teknik resim karşılığı ve bu adımın montaj durumu burada görünür."
    }
   ]
  },
  {
   "adim": "isaretle",
   "baslik": "Parça kodu seçici",
   "gorsel": "img/06_parca_secici.jpg",
   "boyut": [
    1100,
    680
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Kodu yazmak yerine görselden seçmek",
     "metin": "İşarete parça kodu atanırken kütüphanedeki her parça görseliyle gösterilir; birden fazla seçilebilir."
    }
   ]
  },
  {
   "adim": "isaretle",
   "baslik": "İşaretle: köşe kaynağı",
   "gorsel": "img/07_isaretle_kose.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": [
      16.46,
      18.84,
      58.06,
      78.14
     ],
     "baslik": "Köşe kaynakları",
     "metin": "Dikiş boyunca işaretlenir. Yeşil onay rozeti, işaretin teknik resimdeki sembolle eşleştiğini gösterir."
    },
    {
     "hedef": [
      75.42,
      18.84,
      23.75,
      79.77
     ],
     "baslik": "Montaj durumu",
     "metin": "Program kalıp işaretlerinden her adımda kalıpta hangi parçaların olduğunu çıkarır."
    }
   ]
  },
  {
   "adim": "teknik",
   "baslik": "Teknik resim çalışma alanı",
   "gorsel": "img/08_teknik_resim.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": [
      22.78,
      5.47,
      77.22,
      94.53
     ],
     "baslik": "Vektör PDF teknik resim",
     "metin": "CAD'den çıkan PDF olduğu gibi eklenir; çizgiler ve yazılar doğrudan PDF'ten okunur."
    },
    {
     "hedef": [
      0.83,
      38.26,
      21.11,
      3.49
     ],
     "baslik": "Sembolleri otomatik bul",
     "metin": "ISO 2553 kaynak sembolleri, 'N YERDE' ve z ölçüsüyle birlikte bulunur; okların gösterdiği birleşim noktaları izlenir. Bulunan her sembolün kırpımı alınır."
    },
    {
     "hedef": [
      0.83,
      53.49,
      21.11,
      40.7
     ],
     "baslik": "Sembol listesi",
     "metin": "Her sembolün parça kodları POZ balonlarından ve parça listesinden çözülür. Parçası atanmamış sembol 'parça bekliyor' olarak kalır, mühendis onaylamadan kullanılmaz."
    },
    {
     "hedef": [
      0.83,
      43.37,
      21.11,
      6.28
     ],
     "baslik": "İhtiyaç sayacı",
     "metin": "Sahada kaç alın / köşe kaynağı işaretlendiyse teknik resimde o kadarı aranır; fazlasıyla uğraştırmaz."
    }
   ]
  },
  {
   "adim": "teknik",
   "baslik": "Parça listesi (BOM) onayı",
   "gorsel": "img/09_bom.jpg",
   "boyut": [
    620,
    520
   ],
   "kartlar": [
    {
     "hedef": [
      1.77,
      8.65,
      96.45,
      74.42
     ],
     "baslik": "POZ → parça kodu",
     "metin": "Teknik resimdeki parça listesi otomatik okunur; mühendis bir bakışta onaylar."
    }
   ]
  },
  {
   "adim": "teknik",
   "baslik": "Kaynak sembolü",
   "gorsel": "img/10_sembol.jpg",
   "boyut": [
    765,
    700
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Sembol, parçalar ve kırpım",
     "metin": "Sembolün net kırpımı vektörden alınır ve Excel'de ilgili fotoğrafın köşesine yerleşir. Parçalar kutucuklardan ya da balon numarasından seçilir."
    }
   ]
  },
  {
   "adim": "eslestir",
   "baslik": "Akıllı eşleştirme",
   "gorsel": "img/11_akilli_eslestirme.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": [
      75.42,
      18.84,
      23.75,
      79.77
     ],
     "baslik": "Hangi sembol bu kaynak?",
     "metin": "Program montaj sırasından (kalıba hangi parça ne zaman girdi) teknik resimdeki adayları puanlar ve gerekçesiyle önerir. Mühendis tek tıkla onaylar ya da başka sembol seçer."
    }
   ]
  },
  {
   "adim": "eslestir",
   "baslik": "WPS eşleştirme",
   "gorsel": "img/12_wps.jpg",
   "boyut": [
    560,
    185
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Onaylı WPQR'dan WPS",
     "metin": "Parçaların malzeme ve kalınlığından fabrikanın onaylı WPQR kütüphanesinde karşılık aranır. Hiçbir kaynak parametresi tahminle üretilmez; bulunamazsa nedeni açıkça yazılır. (Bu ön izlemedeki WPQR ve WPS numaraları örnektir.)"
    }
   ]
  },
  {
   "adim": "kontrol",
   "baslik": "Yayınla: kontrol listesi",
   "gorsel": "img/13_kontrol.jpg",
   "boyut": [
    1440,
    860
   ],
   "kartlar": [
    {
     "hedef": [
      2.57,
      24.65,
      55.28,
      71.28
     ],
     "baslik": "Dışa aktarmadan önce kontrol",
     "metin": "Eksik SOP alanı, işaretsiz adım, kodsuz işaret ve teknik resimle eşleşmemiş kaynak listelenir. Tıklanan madde ilgili işarete götürür."
    },
    {
     "hedef": [
      61.32,
      18.49,
      36.11,
      6.51
     ],
     "baslik": "Bu projede otomatik üretilenler",
     "metin": "Adım, işaret, parça kodu ve sayfa sayısı; teknik resim eşleşmesi ve kapsam denetimi. Teknik resimde olup iş emrinde unutulan kaynak burada yakalanır."
    }
   ]
  },
  {
   "adim": "excel",
   "baslik": "Kaynak iş emri · sayfa 1",
   "gorsel": "img/14_excel_kaynak_1.jpg",
   "boyut": [
    1500,
    838
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Kaynak iş emri",
     "metin": "Firmanın kendi Excel şablonunda: her adım için sıra no, parça kodları, talimat cümlesi ve işaretli fotoğraf. Talimat ve kod satırları otomatik yazılır."
    }
   ]
  },
  {
   "adim": "excel",
   "baslik": "Kaynak iş emri · sayfa 2",
   "gorsel": "img/14_excel_kaynak_2.jpg",
   "boyut": [
    1500,
    838
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Kaynak iş emri",
     "metin": "Adımlar sayfa sayfa devam eder."
    }
   ]
  },
  {
   "adim": "excel",
   "baslik": "Kaynak iş emri · sayfa 3",
   "gorsel": "img/14_excel_kaynak_3.jpg",
   "boyut": [
    1574,
    870
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Kaynak iş emri",
     "metin": "Adımlar sayfa sayfa devam eder."
    }
   ]
  },
  {
   "adim": "excel",
   "baslik": "Çapak iş emri · sayfa 1",
   "gorsel": "img/14_excel_capak_1.jpg",
   "boyut": [
    1500,
    838
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Çapak iş emri",
     "metin": "Firmanın kendi Excel şablonunda: her adım için sıra no, parça kodları, talimat cümlesi ve işaretli fotoğraf. Talimat ve kod satırları otomatik yazılır."
    }
   ]
  },
  {
   "adim": "excel",
   "baslik": "Çapak iş emri · sayfa 2",
   "gorsel": "img/14_excel_capak_2.jpg",
   "boyut": [
    1574,
    870
   ],
   "kartlar": [
    {
     "hedef": null,
     "baslik": "Çapak iş emri",
     "metin": "Adımlar sayfa sayfa devam eder."
    }
   ]
  }
 ]
};
