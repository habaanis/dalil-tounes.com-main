# 🔧 ÉTAPE 3 : Configuration des Variables d'Environnement sur Netlify

## 📍 OÙ EXACTEMENT Trouver les Variables d'Environnement

### APRÈS avoir déployé votre site sur Netlify :

1. **Dans votre dashboard Netlify**, vous voyez votre site déployé
2. **Cliquez sur le nom de votre site** (pas sur l'URL, mais sur le nom du site)
3. **Vous arrivez sur la page de gestion de votre site**

---

## 🎯 NAVIGATION PRÉCISE

### Vous verrez des onglets en haut :
```
┌─────────────────────────────────────────────────────────┐
│  [Overview] [Deploys] [Site settings] [Domain settings] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Votre site : https://amazing-name.netlify.app         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### ÉTAPE 1 : Cliquer sur "Site settings"
- **Cliquez sur l'onglet "Site settings"**
- **Vous arrivez sur une page avec un menu à gauche**

### ÉTAPE 2 : Trouver "Environment variables" dans le menu gauche
```
Menu gauche :
├── General
├── Build & deploy
├── Domain management
├── Identity
├── Functions
├── Environment variables  ← CLIQUEZ ICI !
├── Post processing
└── ...
```

### ÉTAPE 3 : Cliquer sur "Environment variables"
- **Dans le menu de gauche, cliquez sur "Environment variables"**
- **Vous arrivez sur la page de configuration**

---

## ➕ AJOUTER VOS VARIABLES

### Sur la page "Environment variables" :

1. **Cliquez sur "Add variable"** ou "New variable"
2. **Ajoutez ces 3 variables une par une** :

#### Variable 1 :
- **Key** : `VITE_SUPABASE_URL`
- **Value** : `https://votre-projet-id.supabase.co`

#### Variable 2 :
- **Key** : `VITE_SUPABASE_ANON_KEY`
- **Value** :  (votre clé anon)
import.meta.env.VITE_Maps_API_KEY
#### Variable 3 :
- **Key** : `VITE_GOOGLE_MAPS_API_KEY`
- **Value** : 

3. **Cliquez sur "Save"** après chaque variable

---

## 🔄 REDÉPLOIEMENT

### Après avoir ajouté les variables :

1. **Retournez à l'onglet "Deploys"**
2. **Cliquez sur "Trigger deploy"**
3. **Sélectionnez "Deploy site"**
4. **Attendez 2-3 minutes**

---

## 📱 CHEMIN COMPLET RÉSUMÉ

```
Dashboard Netlify
    ↓
Cliquer sur votre site
    ↓
Onglet "Site settings"
    ↓
Menu gauche "Environment variables"
    ↓
"Add variable" (3 fois)
    ↓
Onglet "Deploys" → "Trigger deploy"
```

---

## 🆘 SI VOUS NE TROUVEZ PAS

### "Je ne vois pas Site settings"
- **Assurez-vous** d'avoir cliqué sur le **nom** de votre site (pas l'URL)
- **Rafraîchissez** la page

### "Je ne vois pas Environment variables"
- **Scrollez** dans le menu de gauche
- **Cherchez** "Env" ou "Environment"
- **Parfois** c'est dans "Build & deploy" → "Environment"

### "Je ne peux pas ajouter de variables"
- **Vérifiez** que vous êtes propriétaire du site
- **Essayez** un autre navigateur

---

## 🎯 OBJECTIF

Une fois les 3 variables ajoutées et le site redéployé, **votre site aura accès à** :
- ✅ Base de données Supabase
- ✅ Cartes Google Maps
- ✅ Toutes les fonctionnalités

---

**Dites-moi si vous trouvez maintenant la section "Environment variables" !**