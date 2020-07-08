<template>

  <footer class="page-footer">

      <section class="audioplayer-wrap --is-active">
        <audioplayer></audioplayer>
      </section>

      <p class="text">
        Diese Website ist im
        <a href="https://th-koeln.github.io/mi-bachelor-webdevelopment/">Vertiefungsmodul Webdevelopment</a>
        im Studiengang Medieninformatik an der TH Köln erarbeitet worden.
      </p>

      <h2 class="headline">Bildquellen:</h2>
      <p class="text">
        Alle Texte und Bilder dieser Website sind Wikipedia entnommen. Im Einzelnen sind dies:
      </p>

      <link-list class="list text" :items="items"></link-list>

  </footer>

</template>

<script>
import Audioplayer from '@/components/Audioplayer.vue';
import LinkList from '@/components/LinkList.vue';

export default {
  name: 'PageFooter',

  components: {
    Audioplayer,
    LinkList,
  },

  data() {
    return {
      items: [
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=41386346',
          title: 'Musikfestivals Bochum Total: Von Krd - Eigenes Werk, CC BY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=19529579',
          title: 'Dixieland Dresden: Von Brücke-Osteuropa - Eigenes Werk, CC0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=41523882',
          title: 'Schlagermove: Von Frank Schwichtenberg - Eigenes Werk, CC BY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=12381395',
          title: 'Das Fest: Von Moritz Vogt - Eigenes Werk, CC BY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=59392655',
          title: 'Schlossgrabenfest: Von Sven Mandel - Eigenes Werk, CC BY-SA 4.0',
        },
        {
          src: 'https://de.wikipedia.org/w/index.php?curid=2671198',
          title: 'Rock im Park: Von steve20079 - selber geschossen, Bild-frei',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=47221075',
          title: 'Bardentreffen: Von Rs-foto - Eigenes Werk, CC BY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=41685590',
          title: 'Breminale: Von Jocian - Eigenes Werk, CC BY-SA 4.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=172325',
          title: 'Düsseldorfer Jazz-Rally: Von © Raimond Spekking / CC BY-SA 4.0 (via Wikimedia Commons), CC BY-SA 4.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=7662763',
          title: 'Maiwoche Maiwoche - The Rattles: Von ThomasLieven - Eigenes Werk, CCBY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=7450295',
          title: 'Maiwoche - Marktplatz: Von Corradox - Eigenes Werk, CC BY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=16099807',
          title: 'Maiwoche -Bigband: Von Sebmus - Eigenes Werk, CC BY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=4090790',
          title: 'Open-Air Live Aid: Von Squelle - Eigenes Werk, CC BY-SA 3.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=1972265',
          title: 'Rock am Ring: Von Elmar J. Lordemann, CC BY-SA 2.0 de',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=49800362',
          title: 'A3C: Von Jadea3c - Eigenes Werk, CC BY-SA 4.0',
        },
        {
          src: 'https://commons.wikimedia.org/w/index.php?curid=38105988',
          title: 'Tomorrowland: Von Global Stomping - TomorrowLand - Get Wicky!!!, CC BY-SA 2.0',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.page-footer {
  padding: $m $m $xxl $m;
  color: $footer-color;
  background-color: $footer-background-color;
  $self: &;

  @media only screen and (min-width: $vp-large) {
    width: $vp-large;
    margin: 0 auto;
    box-shadow: $shadow-l;
  }

  .text {
    font-size: $s;
    line-height: $lh-default;

    /* Selection of deep elements (found in child-components) */
    &::v-deep a {
      font-weight: $fw-normal;
      text-decoration: none;
      color: $footer-color;
    }

    &+.list {
      margin-top: -$m;
    }
  }

  .headline {
    font-size: $s;
    font-weight: $fw-bold;
    color: $footer-color;
  }

  .audioplayer-wrap {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow: hidden;
    justify-content: center;
    max-height: 0;

    transition: max-height $tr-medium;

    background-color: $darker;

    &.--is-active {
      max-height: 100px;
    }
  }

}

</style>
