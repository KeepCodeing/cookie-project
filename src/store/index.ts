import { createStore } from 'vuex'
import { SEARCH_PROP_UPDATE, SHOW_MESSAGE_BOX } from './type'
import {  GlobalProp } from './props'
import { showMessageBox } from '../utils/utils'
import axios from '../plugins/axios'

export default createStore<GlobalProp>({
  state: {
    search_prop: { keyword: '', tag: true },
    message_box_prop: { type: '成功', show: false, timeout: 1500, message: '' },
    illust_list_prop: {
      code: 200,
      message: "获取图片数据成功",
      count: 53246,
      data: [
        {
          id: 53772,
          sid: "10788295",
          user_id: "365241",
          username: "アウストラロピテクス",
          title:
            "【悲報】テルメチなんとか兄貴、再生数7000ぽっちの糞を遺し、逝く",
          description:
            "義務面会室やってなかったらフェードアウトできたのにマジで辛い<br>\n誰か俺の代わりに面会引き継いでいいよ",
          source_url:
            "https://lohas.nicoseiga.jp/priv/58ef49d7fadf548b2deac7f95bc4904f9fe9be84/1627882017/10788295",
          created: "2021-08-02T13:49:26+00:00",
          tags: [
            "キャラクター",
            "クッキー☆",
            "原人兄貴",
            "アウストラロピテクス",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788295.png",
          updated: "2021-08-02T04:56:59.545677+00:00",
          favorite: 1,
          favorited: false,
        },
        {
          id: 53771,
          sid: "10788253",
          user_id: "119002075",
          username: "ソムくんのガチ恋ストーカー",
          title: "ネクCB",
          description: "政治批判風兄貴",
          source_url:
            "https://lohas.nicoseiga.jp/priv/8490885c5959f80142d7069971b53d91c3c5ac05/1627869993/10788253",
          created: "2021-08-02T10:33:12+00:00",
          tags: [
            "キャラクター",
            "クッキー☆",
            "NKTIDKSG",
            "CB姉貴",
            "KTGIJGKGDUSIMN姉貴",
            "ソムくんのガチ恋ストーカー",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788253.jpeg",
          updated: "2021-08-02T01:36:39.696791+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53770,
          sid: "10788199",
          user_id: "77047193",
          username: "ぎん",
          title: "ゆひは八尺様じゃないよ",
          description: "背景は無料素材を加工したものです",
          source_url:
            "https://lohas.nicoseiga.jp/priv/78eb4415a04f3b1e1d8cd462208fda037c02e7d8/1627845348/10788199",
          created: "2021-08-02T03:36:50+00:00",
          tags: ["キャラクター", "クッキー☆", "YUH姉貴", "MGR姉貴", "ぎん"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788199.png",
          updated: "2021-08-01T18:45:59.221929+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53769,
          sid: "10788188",
          user_id: "116288269",
          username: "二四歳学生",
          title: "息抜きYUH",
          description: "似たような絵既にいくつもある気がするので初投稿です。",
          source_url:
            "https://lohas.nicoseiga.jp/priv/56a9061756fdd924940b84e58ce887def9345eb3/1627841739/10788188",
          created: "2021-08-02T02:34:03+00:00",
          tags: ["キャラクター", "クッキー☆", "二四歳学生"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788188.png",
          updated: "2021-08-01T17:45:43.107826+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53768,
          sid: "10788182",
          user_id: "42973512",
          username: "なかのくん",
          title: "シケルゴン",
          description: "",
          source_url:
            "https://lohas.nicoseiga.jp/priv/351791da89e3ec458fbf78bbce708061f45ed80a/1627839332/10788182",
          created: "2021-08-02T01:57:26+00:00",
          tags: ["キャラクター", "クッキー☆", "MZ姉貴", "なかのくん"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788182.png",
          updated: "2021-08-01T17:05:36.197336+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53766,
          sid: "10788178",
          user_id: "116244346",
          username: "絶対許",
          title: "流産キックされるDIYUSI",
          description: "無駄な妊娠だったね<br>\n<br>\n<br>\nim10788177",
          source_url:
            "https://lohas.nicoseiga.jp/priv/71a5ee0cc5a449b33858e449c9cf2269f52801e5/1627838125/10788178",
          created: "2021-08-02T01:41:22+00:00",
          tags: ["キャラクター", "クッキー☆", "DIYUSI", "ひで(淫夢)", "絶対許"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788178.png",
          updated: "2021-08-01T16:45:27.945413+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53767,
          sid: "10788177",
          user_id: "116244346",
          username: "絶対許",
          title: "子供を授かったDIYUSI",
          description:
            "多分お前らとの子かも<br>\nお幸せに<br>\n<br>\n<br>\n⇒im10788178",
          source_url:
            "https://lohas.nicoseiga.jp/priv/b27420f36c8ebf2d670571fc98a672ead716835d/1627838128/10788177",
          created: "2021-08-02T01:40:45+00:00",
          tags: ["キャラクター", "クッキー☆", "DIYUSI", "絶対許"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788177.png",
          updated: "2021-08-01T16:45:30.351472+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53765,
          sid: "10788164",
          user_id: "88168805",
          username: "海水ジュース",
          title: "きらきら☆の切り抜きと音声素材",
          description:
            "パソコンの調子が最近悪いのでim9664654のバースデー☆素材持ってる人がいたら頂けるととても嬉しいです\n\n<br><br>\n\nhttps://drive.google.com/file/d/1WqZHjnC4Q0-5K0aoZ4WwItn73-cwBeBm/view?usp=sharing\n<br>↑出来てなかったら教えてください",
          source_url:
            "https://lohas.nicoseiga.jp/priv/1da0db49108989f1f32ef439cd34390ebd37b35d/1627836920/10788164",
          created: "2021-08-02T01:15:10+00:00",
          tags: [
            "キャラクター",
            "クッキー☆",
            "クッキー☆MAD素材リンク",
            "きらきら☆",
            "海水ジュース",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788164.png",
          updated: "2021-08-01T16:25:23.750833+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53764,
          sid: "10788155",
          user_id: "119269566",
          username: "dwqjk3279dhik",
          title: "MZ姉貴",
          description:
            "RIくんを見送るやさしいMZ姉貴です<br>ほほえましいね<br>https://i.imgur.com/qaeA2Jg.jpg",
          source_url:
            "https://lohas.nicoseiga.jp/priv/7ba748ac5d497a414476efb911f3e959b078f3ad/1627835716/10788155",
          created: "2021-08-02T01:01:33+00:00",
          tags: ["キャラクター", "クッキー☆", "MZ姉貴", "dwqjk3279dhik"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788155.jpeg",
          updated: "2021-08-01T16:05:18.611113+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53763,
          sid: "10788122",
          user_id: "6626191",
          username: "あやしー",
          title: "海に行こう（提案）",
          description: "釣りもしよう",
          source_url:
            "https://lohas.nicoseiga.jp/priv/bd0640ca39e5a956bebedb62db6657aba784c41d/1627832103/10788122",
          created: "2021-08-02T00:01:37+00:00",
          tags: [
            "キャラクター",
            "TIS姉貴",
            "MZ姉貴",
            "kofji姉貴",
            "BNKRG姉貴",
            "MARU姉貴",
            "WEB姉貴",
            "クッキー☆",
            "イースター☆",
            "あやしー",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788122.png",
          updated: "2021-08-01T15:05:11.073690+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53762,
          sid: "10788079",
          user_id: "115785837",
          username: "ゲスト",
          title: "らくがきDIYUSI",
          description: "",
          source_url:
            "https://lohas.nicoseiga.jp/priv/e154a330e9572e825da1b17bde1deeb2296fc0ff/1627829096/10788079",
          created: "2021-08-01T23:10:45+00:00",
          tags: ["キャラクター", "クッキー☆", "DIYUSI", "ゲスト"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788079.png",
          updated: "2021-08-01T14:14:59.086525+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53761,
          sid: "10788073",
          user_id: "116061512",
          username: "勝手に改蔵",
          title: "夏のmaru姉貴",
          description: "lol",
          source_url:
            "https://lohas.nicoseiga.jp/priv/1f3620fd8f5d2b61467207853728aaf72c6ece6b/1627828491/10788073",
          created: "2021-08-01T22:58:44+00:00",
          tags: [
            "キャラクター",
            "クッキー☆",
            "イースター☆",
            "maru姉貴",
            "勝手に改蔵",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788073.png",
          updated: "2021-08-01T14:04:55.366029+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53760,
          sid: "10788002",
          user_id: "16379837",
          username: "スミ久",
          title: "夏のmaru姉貴",
          description: "暑いからってだらしない恰好しちゃ…駄目だろ！",
          source_url:
            "https://lohas.nicoseiga.jp/priv/b6711e7d467a072e8023a02fae6a8b7ff9a38167/1627823078/10788002",
          created: "2021-08-01T21:31:12+00:00",
          tags: [
            "キャラクター",
            "クッキー☆",
            "イースター☆",
            "maru姉貴",
            "スミ久",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10788002.png",
          updated: "2021-08-01T12:34:42.763625+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53759,
          sid: "10787831",
          user_id: "96827374",
          username: "エイブ",
          title: "死相姉貴",
          description:
            "ハッ…ハッ…アッー！アーツィ！アーツ！アーツェ！アツゥイ！\nヒュゥー、アッツ！アツウィー、アツーウィ！アツー、アツーェ！\nすいませへぇぇ～ん！アッアッアッ、アツェ！アツェ！アッー、熱いっす！熱いっす！ーアッ！\n熱いっす！熱いっす！アツェ！アツイ！アツイ！アツイ！アツイ！アツイ！アー・・・アツイ！<br>無関係の文字列　https://imgur.com/DQ9hiI7/jpg",
          source_url:
            "https://lohas.nicoseiga.jp/priv/72e543baa887b23f6e93ada1622af24382c59dac/1627811058/10787831",
          created: "2021-08-01T18:10:42+00:00",
          tags: ["キャラクター", "クッキー☆", "エイブ"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10787831.jpeg",
          updated: "2021-08-01T09:14:20.677626+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53758,
          sid: "10787793",
          user_id: "95236310",
          username: "七七",
          title: "むぎむぎ",
          description: "みんなもチャンネル登録しよう。",
          source_url:
            "https://lohas.nicoseiga.jp/priv/96c993a5f987a8d22f127371d83ec52b96eed324/1627806245/10787793",
          created: "2021-08-01T16:48:47+00:00",
          tags: ["キャラクター", "MG兄貴", "クッキー☆", "スペカ☆", "七七"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10787793.png",
          updated: "2021-08-01T07:54:10.729465+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53757,
          sid: "10787772",
          user_id: "49294839",
          username: "六連井連峯",
          title: "しけMZ",
          description: "MZ装飾が難しいから描くの大変できらいだけどすき",
          source_url:
            "https://lohas.nicoseiga.jp/priv/bc3d17f898b534539a1fb9680ef7fc04e5c700c7/1627804440/10787772",
          created: "2021-08-01T16:15:19+00:00",
          tags: ["キャラクター", "クッキー☆", "MZ姉貴", "PNG", "六連井連峯"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10787772.png",
          updated: "2021-08-01T07:24:02.676118+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53756,
          sid: "10787733",
          user_id: "55888461",
          username: "punikov",
          title: "レゴと化したクッキー☆の中盤あたりに出てくるニワトリ",
          description: "",
          source_url:
            "https://lohas.nicoseiga.jp/priv/2c013d6e7bfd23f96d1fe5c824fb743b2a903b12/1627799028/10787733",
          created: "2021-08-01T14:43:22+00:00",
          tags: [
            "キャラクター",
            "クッキー☆",
            "LEGO",
            "クッキー☆の中盤あたりに出てくるニワトリ",
            "punikov",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10787733.jpeg",
          updated: "2021-08-01T05:53:51.823222+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53755,
          sid: "10787698",
          user_id: "85438188",
          username: "トレハ",
          title: "陸戦型死相姉貴",
          description:
            "ガリガリ君のいちご味がじぇんじぇんお店に並ばないんですがそれは（怒）",
          source_url:
            "https://lohas.nicoseiga.jp/priv/7b028faa729269fde4cd638925952738faee82b5/1627794219/10787698",
          created: "2021-08-01T13:27:00+00:00",
          tags: ["キャラクター", "クッキー☆", "死相姉貴", "トレハ"],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10787698.png",
          updated: "2021-08-01T04:33:41.425709+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53754,
          sid: "10787657",
          user_id: "52595768",
          username: "ガンマGANMA",
          title: "ラクーン市警KOFJI",
          description: "ポリスイースター☆すこ",
          source_url:
            "https://lohas.nicoseiga.jp/priv/c55fdd159542cb0f598157dad764e7324bf5c5c5/1627788208/10787657",
          created: "2021-08-01T11:44:24+00:00",
          tags: [
            "アニメ",
            "クッキー☆",
            "イースター☆",
            "バイオハザード",
            "KOFJI姉貴",
            "ガンマGANMA",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10787657.png",
          updated: "2021-08-01T02:53:30.304238+00:00",
          favorite: 0,
          favorited: false,
        },
        {
          id: 53753,
          sid: "10787649",
          user_id: "56965034",
          username: "鬼舞辻無産",
          title: "自己矛盾兄貴っぽいおじちゃん口部分4つBB",
          description:
            "一枚にまとめたほうが良いとのアドバイスがあったのでまとめました\n連投してごめんなさい",
          source_url:
            "https://lohas.nicoseiga.jp/priv/bfd57851a4ab20461099827958460243971a36ff/1627785802/10787649",
          created: "2021-08-01T11:06:33+00:00",
          tags: [
            "似顔絵",
            "真夏の夜の淫夢",
            "クッキー☆",
            "自己矛盾兄貴",
            "BB素材",
            "鬼舞辻無産",
          ],
          cdn_url:
            "https://cdn.jsdelivr.net/gh/DirtyCookies/CookieImages@main/2021/8/im10787649.jpeg",
          updated: "2021-08-01T02:13:24.242107+00:00",
          favorite: 0,
          favorited: false,
        },
      ],
    }
  },
  mutations: {
    [SEARCH_PROP_UPDATE](state, { search_data }) {
      state.search_prop = search_data;
      
      showMessageBox({ type: '成功', message: '成功搜索xx标签/编号的静画', timeout: 1500, show: true }, this);
    },
    [SHOW_MESSAGE_BOX](state, payload) {
      state.message_box_prop = payload;
      setTimeout(() => state.message_box_prop.show = false, payload.timeout)
    }
  },
  actions: {

  },
  modules: {
  }
})
