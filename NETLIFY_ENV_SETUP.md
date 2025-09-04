# 🔐 Configuration des Variables d'Environnement sur Netlify

## 🎯 ÉTAPE 1 : Accéder aux paramètres de votre site

### 📍 Navigation précise :
1. **Allez sur** : https://app.netlify.com
2. **Connectez-vous** à votre compte
3. **Cliquez sur votre site** : "dalil-tounes" ou le nom affiché
4. **Cliquez sur "Site settings"** (onglet en haut)
5. **Dans le menu de gauche**, cliquez sur **"Environment variables"**

---

## 🔑 ÉTAPE 2 : Ajouter les variables d'environnement

### Variables OBLIGATOIRES à ajouter :

#### 🗄️ **SUPABASE (3 variables)**
```
Variable 1:
Key: VITE_SUPABASE_URL
Value: https://votre-projet-id.supabase.co

Variable 2:
Key: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Variable 3:
Key: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### 🗺️ **GOOGLE MAPS (1 variable)**
```
Variable 4:
Key: GOOGLE_MAPS_API_KEY
Value: AIzaSyANJrHS7OFU12UiLgtPIliTGgVVNrQKTug
```

#### 💳 **STRIPE (3 variables - OPTIONNEL pour l'instant)**
```
Variable 5:
Key: VITE_STRIPE_PUBLISHABLE_KEY
Value: pk_test_... (ou pk_live_... pour la production)

Variable 6:
Key: STRIPE_SECRET_KEY
Value: sk_test_... (ou sk_live_... pour la production)

Variable 7:
Key: STRIPE_WEBHOOK_SECRET
Value: whsec_... (secret du webhook)
```

---

## 📋 ÉTAPE 3 : Procédure d'ajout détaillée

### Pour chaque variable :
1. **Cliquez sur "Add variable"**
2. **Key** : Tapez exactement le nom (ex: `VITE_SUPABASE_URL`)
3. **Value** : Collez la valeur correspondante
4. **Cliquez sur "Save"**
5. **Répétez** pour toutes les variables

---

## 🔄 ÉTAPE 4 : Redéploiement

### Après avoir ajouté toutes les variables :
1. **Retournez à l'onglet "Deploys"**
2. **Cliquez sur "Trigger deploy"**
3. **Sélectionnez "Deploy site"**
4. **Attendez** 2-3 minutes

---

## ✅ ÉTAPE 5 : Vérification

### Testez votre site :
1. **Ouvrez** : https://www.dalil-tounes.com
2. **Vérifiez** que :
   - ✅ La recherche fonctionne
   - ✅ Les cartes s'affichent (Google Maps)
   - ✅ Les suggestions d'établissements fonctionnent
   - ✅ Pas d'erreurs dans la console (F12)

---

## 🆘 DÉPANNAGE

### "Je ne trouve pas Environment variables"
- **Assurez-vous** d'être dans "Site settings"
- **Scrollez** dans le menu de gauche
- **Cherchez** "Build & deploy" → "Environment"

### "Les variables ne s'appliquent pas"
- **Vérifiez** l'orthographe exacte des noms
- **Redéployez** obligatoirement après ajout
- **Attendez** la fin du déploiement

### "Erreur Google Maps"
- **Vérifiez** que votre clé API est active
- **Configurez** les restrictions de domaine
- **Ajoutez** `https://www.dalil-tounes.com/*` dans les restrictions

---

## 🎯 RÉSULTAT ATTENDU

Une fois configuré, votre site aura :
- ✅ **Base de données** Supabase fonctionnelle
- ✅ **Cartes interactives** Google Maps
- ✅ **Suggestions** d'établissements
- ✅ **Recherche** optimisée
- ✅ **Toutes les fonctionnalités** actives

---

**🚀 Votre site sera 100% opérationnel !**