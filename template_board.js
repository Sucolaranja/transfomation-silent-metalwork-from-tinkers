ServerEvents.recipes(event => {
  const templates = [
    'rod', 'tip', 'coating', 'grip', 'binding', 'lining', 'cord', 'fletching',
    'sword', 'katana', 'machete', 'knife', 'dagger', 'spear', 'trident', 'mace',
    'shield', 'bow', 'crossbow', 'slingshot', 'arrow', 'pickaxe', 'shovel',
    'axe', 'paxel', 'hammer', 'excavator', 'saw', 'prospector_hammer', 'hoe',
    'mattock', 'sickle', 'shears', 'fishing_rod', 'helmet', 'chestplate',
    'leggings', 'boots', 'elytra', 'ring', 'bracelet', 'necklace'
  ]

  const blueprints = [
    'silentgear:rod_blueprint', 'silentgear:tip_blueprint', 'silentgear:coating_blueprint',
    'silentgear:grip_blueprint', 'silentgear:binding_blueprint', 'silentgear:lining_blueprint',
    'silentgear:cord_blueprint', 'silentgear:fletching_blueprint', 'silentgear:sword_blueprint',
    'silentgear:katana_blueprint', 'silentgear:machete_blueprint', 'silentgear:knife_blueprint',
    'silentgear:dagger_blueprint', 'silentgear:spear_blueprint', 'silentgear:trident_blueprint',
    'silentgear:mace_blueprint', 'silentgear:shield_blueprint', 'silentgear:bow_blueprint',
    'silentgear:crossbow_blueprint', 'silentgear:slingshot_blueprint', 'silentgear:arrow_blueprint',
    'silentgear:pickaxe_blueprint', 'silentgear:shovel_blueprint', 'silentgear:axe_blueprint',
    'silentgear:paxel_blueprint', 'silentgear:hammer_blueprint', 'silentgear:excavator_blueprint',
    'silentgear:saw_blueprint', 'silentgear:prospector_hammer_blueprint', 'silentgear:hoe_blueprint',
    'silentgear:mattock_blueprint', 'silentgear:sickle_blueprint', 'silentgear:shears_blueprint',
    'silentgear:fishing_rod_blueprint', 'silentgear:helmet_blueprint', 'silentgear:chestplate_blueprint',
    'silentgear:leggings_blueprint', 'silentgear:boots_blueprint', 'silentgear:elytra_blueprint',
    'silentgear:ring_blueprint', 'silentgear:bracelet_blueprint', 'silentgear:necklace_blueprint',
    'silentgear:material_grader', 'silentgear:starlight_charger', 'silentgear:alloy_forge',
    'silentgear:recrystallizer', 'silentgear:gear_smithing_table', 'silentgear:refabricator',
    'silentgear:crude_mixer', 'silentgear:super_mixer', 'silentgear:metal_press'
  ]

  // 1. Criar Template Board (Corrigido para evitar erro de item inexistente)
  event.shapeless('4x silentgear:template_board', [
    '#minecraft:logs',
    ['silentgear:knife', '#c:tools/knife', 'minecraft:flint']
  ]).damageIngredient(1).id('slmods:silentgear/template_board_manual')

  // 2. Remover Blueprints (Loop separado para performance)
  blueprints.forEach(bp => {
    event.remove({ output: bp })
  })

  // 3. Processar Templates no Stonecutter
  templates.forEach(name => {
    let itemID = `silentgear:${name}_template`
    event.remove({ output: itemID }) // Remove receita original
    event.stonecutting(itemID, 'silentgear:template_board').id(`slmods:stonecutter/${name}_template`)
  })
})