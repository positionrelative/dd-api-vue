<template>
  <div id="monster-details-page" class="col-sm-12">
    <router-link to="/">Back</router-link>
    <h2>{{ data.name }}</h2>
    <table class="table">
      <tbody>
      <tr>
        <td>Size</td>
        <td>{{ data.size }}</td>
      </tr>
      <tr>
        <td>type</td>
        <td>{{ data.type }}</td>
      </tr>
      <tr>
        <td>subtype</td>
        <td>{{ data.subtype }}</td>
      </tr>
      <tr>
        <td>alignment</td>
        <td>{{ data.alignment }}</td>
      </tr>
      <tr>
        <td>armor_class</td>
        <td>{{ data.armor_class }}</td>
      </tr>
      <tr>
        <td>hit_points</td>
        <td>{{ data.hit_points }}</td>
      </tr>
      <tr>
        <td>hit_dice</td>
        <td>{{ data.hit_dice }}</td>
      </tr>
      <tr v-if="data.speed">
        <td>Speed</td>
        <td>
          <ul>
            <li v-for="(speed, speedkey) of data.speed" :key="'speed-'+speedkey">
              {{ speedkey }} - {{ speed }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Strength</td>
        <td>{{ data.strength }}</td>
      </tr>
      <tr>
        <td>Dexterity</td>
        <td>{{ data.dexterity }}</td>
      </tr>
      <tr>
        <td>Constitution</td>
        <td>{{ data.constitution }}</td>
      </tr>
      <tr>
        <td>Intelligence</td>
        <td>{{ data.intelligence }}</td>
      </tr>
      <tr>
        <td>Wisdom</td>
        <td>{{ data.wisdom }}</td>
      </tr>
      <tr>
        <td>Charisma</td>
        <td>{{ data.charisma }}</td>
      </tr>
      <tr v-if="data.proficiencies">
        <td>Proficiencies</td>
        <td>
          <ul>
            <li v-for="(proficiency, key) of data.proficiencies" :key="'prof-'+key">
              {{ proficiency.proficiency.name }}
            </li>
          </ul>
        </td>
      </tr>
      <tr v-if="data.senses">
        <td>Senses</td>
        <td>
          <ul>
            <li v-for="(sense, sensekey) of data.senses" :key="'sense-'+sensekey">
              {{ sensekey }} - {{ sense }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Languages</td>
        <td>{{ data.languages }}</td>
      </tr>
      <tr>
        <td>challenge_rating</td>
        <td>{{ data.challenge_rating }}</td>
      </tr>
      <tr>
        <td>XP</td>
        <td>{{ data.xp }}</td>
      </tr>
      <tr v-if="data.special_abilities">
        <td>Special abilities</td>
        <td>
          <ul>
            <li v-for="(ability, abilityKey) of data.special_abilities" :key="abilityKey">
              <strong>{{ ability.name }}</strong>
              <br>
              <p>{{ability.desc}}</p>
            </li>
          </ul>
        </td>
      </tr>
      <tr v-if="data.actions">
        <td>Actions</td>
        <td>
          <ul>
            <li v-for="(action, key) in data.actions" :key="'a-'+key">
              <strong>{{ action.name }}</strong> (Attack bonus: {{ action.attack_bonus }})
              <br>
              <p>{{ action.desc }}</p>
              <p>Damage:</p>
              <ul v-if="action.damage">
                <li v-for="(damage, dkey) of action.damage" :key="'damage'+dkey">
                  {{ damage.damage_type.name }} - {{ damage.damage_dice }}
                </li>
              </ul>
            </li>
          </ul>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MonsterDetailsComponent",
  data() {
    return {
      index: ''
    }
  },
  mounted() {
    this.index = this.$route.params.id;
    this.$store.dispatch('dragons/getDetails', this.index)
  },
  computed: {
    data() {
      return this.$store.getters['dragons/getCurrent'];
    }
  }
}
</script>

<style scoped>

</style>
